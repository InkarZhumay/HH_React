import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { END_POINT } from '@/config/end-pont'

export const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    resumes: [],
    resume: {}
  },
  reducers: {
    setMyResumes: (state, action) => {
        state.resumes = action.payload.resumes
    },
    uppendResume: (state, action) => {
      state.resumes = [...state.resumes, action.payload.newresume]
    },
    setResume: (state, action) => {
      state.resume = action.payload.resume
    },
    handleDeleteResume: (state, action) => {
      let resumes =[...state.resumes]
      resumes = resumes.filter(item => item.id !== action.payload)
      state.resumes = resumes
    }
  },
})


export const { setMyResumes, uppendResume, setResume, handleDeleteResume } = resumeSlice.actions

export const getMyResumes = () => async (dispatch) => {
  try {
    const res = await axios.get(`${END_POINT}/api/resume`);
    console.log(res.data);
    dispatch(setMyResumes({resumes: res.data}))
  } catch (e) {
    alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
  }
}

export const getResumeById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${END_POINT}/api/resume/${id}`);
    console.log(res.data);
    // dispatch(setMyResumes({resumes: res.data}))
    dispatch(setResumes({resume: res.data}))

  } catch (e) {
    alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
  }
}

export const createResume = (sendData, router) => async (dispatch) => {
  try {
    const res = await axios.post(`${END_POINT}/api/resume`, sendData);
    router.push("/resumes")
    dispatch(uppendResume({newresume: res.data}))
  } catch (e) {
    console.log(e);
    alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
  }
}

export const editResume = (sendData, router) => async (dispatch) => {
  try {
    const res = await axios.put(`${END_POINT}/api/resume`, sendData);
    router.push("/resumes")
    // dispatch(uppendResume({newresumes: res.data}))
  } catch (e) {
    console.log(e);
    alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
  }
}

export const deleteResume = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${END_POINT}/api/resume/${id}`);
    // router.push("/resumes")
    // dispatch(uppendResume({newresumes: res.data}))
    dispatch(handleDeleteResume(id))
  } catch (e) {
    console.log(e);
    alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
  }
}


export default resumeSlice.reducer