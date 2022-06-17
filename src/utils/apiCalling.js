// import {config} from '../helper/ApiUrl';
import { toast } from 'react-toastify';

import 'regenerator-runtime/runtime'
// import { getLocalDataAsObject } from './CoustomStorage';

class API {
    async get(url,haveParams=false,params={}) {
        try {
            const headers = new Headers();
            let token =  await this.getToken()
            headers.set("Content-Type", 'application/x-www-form-urlencoded');
            headers.set('x-auth-token', token)
            // console.log("token is", token)
            const request = await fetch(`${url}${haveParams? `?${new URLSearchParams(params)}`:''}`, {
                method: 'GET',
                headers
                
            })
            const response = await request.json();
            return response;
        } catch (error) {
            return {
                success: false,
                error
            }
        }
    }
    
    async post(url, body) {
        const data  = Object.keys(body).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]);
          }).join('&');
        try {
            const headers = new Headers();
            let token =  await this.getToken()
            headers.set('x-auth-token', token)
            headers.set('Content-Type', 'application/x-www-form-urlencoded');
            const request = await fetch(url, {
                method: 'POST',
                headers,
                body: data
            })
            const response = await request.json();
            return response;
        } catch (error) {
            toast.warning('Please check your internet connectivity')
           
        }
    }



    async put(url, body) {
        // let token =  await this.getToken()
        // body.token = token
        try {
            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            const request = await fetch(url, {
                method: 'PUT',
                headers,
                body: JSON.stringify(body)
            })
            const response = await request.json();
            return response;
        } catch (error) {
            return {
                success: false,
                error
            }
        }
    }
    async delete(url, params) {
        // let token =  await this.getToken()
        // body.token = token   
        try {
            const headers = new Headers();
            let token =  await this.getToken()
            // headers.set("Content-Type", 'application/x-www-form-urlencoded');
            headers.set('x-auth-token', token)
            headers.set('Content-Type', 'application/json');
            const request = await fetch(`${url}/${params}`, {
                method: 'DELETE',
                headers,
            })
            const response = await request.json();
            return response;
        } catch (error) {
            return {
                success: false,
                error
            }
        }
    }

    async getToken() {
        // let token = getLocalDataAsObject("token")
        // const defaultToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aGV0ZXhkZWFsLml0cGVvcGxlNHUuY29tXC93ZWJhcGlcL2FwaVwvYWRtaW5cL2xvZ2luIiwiaWF0IjoxNTk0MzcyMDk5LCJuYmYiOjE1OTQzNzIwOTksImp0aSI6IlNuamdaalZjTnJkWU9aQ1UiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.5S1PAEnWN_YTV7na3nDE-CHvI5-vokuViF-9OHyqmTs';
        // return token 
    }

    async postUpload(url, file) {
    //     const data = new FormData()
    //    data.append("file",image)
    //    data.append("upload_preset","cookandcookies")
    //    data.append("cloud_name","cook-cookies")
    const headers = new Headers();
    let token =  await this.getToken()
    // headers.set("Content-Type", 'application/x-www-form-urlencoded');
    headers.set('x-auth-token', token)
    // headers.set('Content-Type', 'application/json');
       try {
        const request = await fetch(url,{
            method:"post",
            body:file,
            headers
        })
        const response = await request.json();
        return response;
    } catch (error) {
        return {
            success: false,
            error
        }
    }
}

       
}

export default API;