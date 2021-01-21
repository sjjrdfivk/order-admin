import request from '@/utils/request'
import { registerType } from './apiType'

export async function login(data: registerType): Promise<any> {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}

export async function register(data: registerType): Promise<any>  {
  return request({
    url: '/user/register',
    method: 'POST',
    data
  })
}