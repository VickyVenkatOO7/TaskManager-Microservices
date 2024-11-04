import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../Api/api";

export const submitTask = createAsyncThunk("submissions/submitTask",
    async ({ taskId, githubLink }) => {
        setAuthHeader(localStorage.getItem("jwt"), api);
        try {
            const { data } = await api.post(
                `/api/submission?task_id=${taskId}&github_link=${githubLink}`, {}
            );
            console.log("Submitted Task ", data);
            return data;
        } catch (error) {
            console.log("error ", error);
            throw Error(error.response.data.error);
        }
    }
)


export const fetchAllSubmissions = createAsyncThunk(
    "submissions/fetchAllSubmissions",
    async () => {
        setAuthHeader(localStorage.getItem("jwt"), api);
        try {
            const { data } = await api.get(
                `/api/submission`
            );
            console.log("Submissiosns Fetched ", data);
            return data;
        } catch (error) {
            console.log("error ", error);
            throw Error(error.response.data.error);
        }
    }
)


export const fetchSubmissionsByTaskId = createAsyncThunk(
    "submissions/fetchSubmissionsByTaskId",
    async ({ taskId }) => {
        setAuthHeader(localStorage.getItem("jwt"), api);
        try {
            const { data } = await api.get(
                `/api/submission/task/${taskId}`
            );
            console.log("Submission Fetched ", data);
            return data;
        } catch (error) {
            console.log("error ", error);
            throw Error(error.response.data.error);
        }
    }
)


export const acceptDeclineSubmission = createAsyncThunk(
    "submissions/acceptDeclineSubmission",
    async ({ id, status }) => {
        setAuthHeader(localStorage.getItem("jwt"), api);
        try {
            const { data } = await api.put(
                `/api/submission/${id}?status=${status}`, {}
            );
            console.log("Task Accepted ", data);
            return data;
        } catch (error) {
            console.log("error ", error);
            throw Error(error.response.data.error);
        }
    }
)


const submissionSlice = createSlice({
    name: "submission",
    initialState: {
        submissions: [],
        status: '',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitTask.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.submissions.push(action.payload);
            })
            .addCase(submitTask.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchAllSubmissions.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.submissions = action.payload;
            })
            .addCase(fetchAllSubmissions.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchSubmissionsByTaskId.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.submissions = action.payload;
            })
            .addCase(acceptDeclineSubmission.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.submissions = state.submissions.map((item) => item.id !== action.payload.id ? item : action.payload);
            });
    }
})

export default submissionSlice.reducer;