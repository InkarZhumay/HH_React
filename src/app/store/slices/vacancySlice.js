import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { END_POINT } from '@/config/end-pont'

export const vacancySlice = createSlice({
  name: 'resume',
  initialState: {
    vacancies: [],
    vacancy: {},
    specializations: [],
    cities: [],
    experiences: [],
    skills: [],
    empTypes: [],
    // searchedVacancies:[]
  },
  reducers: {
    setVacancies: (state, action) => {
        state.vacancies = action.payload.vacancies
    },
    // setSearchedVacancies: (state, action) => {
    //   state.searchedVacancies = action.payload.vacancies
    // },
    setVacancy: (state, action) => {
      state.vacancy = action.payload.vacancy
    },
    handleDeleteVacancy: (state, action) => {
      let vacancies =[...state.vacancies]
      vacancies = vacancies.filter(item => item.id !== action.payload)
      state.vacancies = vacancies
    },
    setSpecializations:(state, action) => {
        state.specializations = action.payload
    },
    setCities:(state, action) => {
      state.cities = action.payload
    },
    setExps:(state, action) => {
      state.experiences = action.payload
    },
    setSkills:(state, action) => {
      state.skills = action.payload
    },
    setEmpType:(state, action) => {
      state.empTypes = action.payload
    }
  },
})


export const { setVacancies, setVacancy, handleDeleteVacancy, setSpecializations, setCities, setExps, setSkills, setEmpType } = vacancySlice.actions

export const getMyVacancies = () => async (dispatch) => {
  try {
    const res = await axios.get(`${END_POINT}/api/vacancy`);
    // console.log(res.data);
    dispatch(setVacancies({vacancies: res.data}))
  } catch (e) {
    alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
  }
}

export const getSpecializations = () => async (dispatch) => {
    try {
      const res = await axios.get(`${END_POINT}/api/specializations`);
      // console.log(res.data);
      dispatch(setSpecializations(res.data))
    } catch (e) {
      alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
    }
  }

  export const getCities = () => async (dispatch) => {
    try {
      const res = await axios.get(`${END_POINT}/api/region/cities`);
      // console.log(res.data);
      dispatch(setCities(res.data))
    } catch (e) {
      alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
    }
  }

  export const getExperiences = () => async (dispatch) => {
    try {
      const res = await axios.get(`${END_POINT}/api/experiences`);
      // console.log(res.data);
      dispatch(setExps(res.data))
    } catch (e) {
      alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
    }
  }

  export const getSkills = () => async (dispatch) => {
    try {
      const res = await axios.get(`${END_POINT}/api/skills`);
      // console.log(res.data);
      dispatch(setSkills(res.data))
    } catch (e) {
      alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
    }
  }

  export const getEmpType = () => async (dispatch) => {
    try {
      const res = await axios.get(`${END_POINT}/api/employment-types`);
      // console.log(res.data);
      dispatch(setEmpType(res.data))
    } catch (e) {
      alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
    }
  }

  export const createVacancy = (sendData, router) => async (dispatch) => {
    try {
      const res = await axios.post(`${END_POINT}/api/vacancy`, sendData);
      router.push("/vacancy")
      // dispatch(uppendVacancy({newvacancy: res.data}))
    } catch (e) {
      console.log(e);
      alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
    }
  }

  export const deleteVacancy = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${END_POINT}/api/vacancy/${id}`);
    // router.push("/resumes")
    // dispatch(uppendResume({newresumes: res.data}))
    dispatch(handleDeleteVacancy(id))
  } catch (e) {
    console.log(e);
    alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
  }
}

export const getVacancyById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${END_POINT}/api/vacancy/${id}`);
    dispatch(setVacancy({vacancy: res.data}))
  } catch (e) {
    alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
  }
}

export const getSearchedVacancies = (params,router) => async (dispatch) => {
  try {
      const {
        q,
        specializationId,
        cityId,
        experienceId,
        employmentTypeId,
        salary,
        salary_type
    } = params;

    let queryString = "?"
    if(q)queryString +=`q=${q}&`
    if(specializationId)queryString +=`specializationId=${specializationId}&`
    if(cityId)queryString +=`cityId=${cityId}&`
    if(salary)queryString +=`salary=${salary}&`
    if(salary_type)queryString +=`salary_type=${salary_type}&`
    if(experienceId)queryString+=`experienceId=${experienceId}&`
    if(employmentTypeId)queryString +=`employmentTypeId=${employmentTypeId}&`

    router.push(`/search/vacancy${queryString}`)
    
    const res = await axios.get(`${END_POINT}/api/vacancy/search${queryString}`);
    // console.log(res.data);
    dispatch(setVacancies({vacancies: res.data}))
  } catch (e) {
    alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
  }
}

// export const editResume = (sendData, router) => async (dispatch) => {
//   try {
//     const res = await axios.put(`${END_POINT}/api/resume`, sendData);
//     router.push("/resumes")
//     // dispatch(uppendResume({newresumes: res.data}))
//   } catch (e) {
//     console.log(e);
//     alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта")
//   }
// }




export default vacancySlice.reducer