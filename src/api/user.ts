import request from '@/utils/request'

export async function login(params: any) {
  return request({
    url: '/user/login',
    method: 'POST',
    data: params,
  })
}