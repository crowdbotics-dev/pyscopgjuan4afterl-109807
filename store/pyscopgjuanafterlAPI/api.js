import axios from "axios"
const pyscopgjuanafterlAPI = axios.create({
  baseURL: "https://pyscopgjuan4afterl-109807.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return pyscopgjuanafterlAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_azul_list(payload) {
  return pyscopgjuanafterlAPI.get(`/api/v1/azul/`)
}
function api_v1_azul_create(payload) {
  return pyscopgjuanafterlAPI.post(`/api/v1/azul/`, payload)
}
function api_v1_azul_retrieve(payload) {
  return pyscopgjuanafterlAPI.get(`/api/v1/azul/${payload.id}/`)
}
function api_v1_azul_update(payload) {
  return pyscopgjuanafterlAPI.put(`/api/v1/azul/${payload.id}/`, payload)
}
function api_v1_azul_partial_update(payload) {
  return pyscopgjuanafterlAPI.patch(`/api/v1/azul/${payload.id}/`, payload)
}
function api_v1_azul_destroy(payload) {
  return pyscopgjuanafterlAPI.delete(`/api/v1/azul/${payload.id}/`)
}
function api_v1_cat_list(payload) {
  return pyscopgjuanafterlAPI.get(`/api/v1/cat/`)
}
function api_v1_cat_create(payload) {
  return pyscopgjuanafterlAPI.post(`/api/v1/cat/`, payload)
}
function api_v1_cat_retrieve(payload) {
  return pyscopgjuanafterlAPI.get(`/api/v1/cat/${payload.id}/`)
}
function api_v1_cat_update(payload) {
  return pyscopgjuanafterlAPI.put(`/api/v1/cat/${payload.id}/`, payload)
}
function api_v1_cat_partial_update(payload) {
  return pyscopgjuanafterlAPI.patch(`/api/v1/cat/${payload.id}/`, payload)
}
function api_v1_cat_destroy(payload) {
  return pyscopgjuanafterlAPI.delete(`/api/v1/cat/${payload.id}/`)
}
function api_v1_dog_list(payload) {
  return pyscopgjuanafterlAPI.get(`/api/v1/dog/`)
}
function api_v1_dog_create(payload) {
  return pyscopgjuanafterlAPI.post(`/api/v1/dog/`, payload)
}
function api_v1_dog_retrieve(payload) {
  return pyscopgjuanafterlAPI.get(`/api/v1/dog/${payload.id}/`)
}
function api_v1_dog_update(payload) {
  return pyscopgjuanafterlAPI.put(`/api/v1/dog/${payload.id}/`, payload)
}
function api_v1_dog_partial_update(payload) {
  return pyscopgjuanafterlAPI.patch(`/api/v1/dog/${payload.id}/`, payload)
}
function api_v1_dog_destroy(payload) {
  return pyscopgjuanafterlAPI.delete(`/api/v1/dog/${payload.id}/`)
}
function api_v1_juan_list(payload) {
  return pyscopgjuanafterlAPI.get(`/api/v1/juan/`)
}
function api_v1_juan_create(payload) {
  return pyscopgjuanafterlAPI.post(`/api/v1/juan/`, payload)
}
function api_v1_juan_retrieve(payload) {
  return pyscopgjuanafterlAPI.get(`/api/v1/juan/${payload.id}/`)
}
function api_v1_juan_update(payload) {
  return pyscopgjuanafterlAPI.put(`/api/v1/juan/${payload.id}/`, payload)
}
function api_v1_juan_partial_update(payload) {
  return pyscopgjuanafterlAPI.patch(`/api/v1/juan/${payload.id}/`, payload)
}
function api_v1_juan_destroy(payload) {
  return pyscopgjuanafterlAPI.delete(`/api/v1/juan/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return pyscopgjuanafterlAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return pyscopgjuanafterlAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return pyscopgjuanafterlAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return pyscopgjuanafterlAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return pyscopgjuanafterlAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return pyscopgjuanafterlAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return pyscopgjuanafterlAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return pyscopgjuanafterlAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload
  )
}
function rest_auth_registration_create(payload) {
  return pyscopgjuanafterlAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return pyscopgjuanafterlAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return pyscopgjuanafterlAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return pyscopgjuanafterlAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return pyscopgjuanafterlAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_azul_list,
  api_v1_azul_create,
  api_v1_azul_retrieve,
  api_v1_azul_update,
  api_v1_azul_partial_update,
  api_v1_azul_destroy,
  api_v1_cat_list,
  api_v1_cat_create,
  api_v1_cat_retrieve,
  api_v1_cat_update,
  api_v1_cat_partial_update,
  api_v1_cat_destroy,
  api_v1_dog_list,
  api_v1_dog_create,
  api_v1_dog_retrieve,
  api_v1_dog_update,
  api_v1_dog_partial_update,
  api_v1_dog_destroy,
  api_v1_juan_list,
  api_v1_juan_create,
  api_v1_juan_retrieve,
  api_v1_juan_update,
  api_v1_juan_partial_update,
  api_v1_juan_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}