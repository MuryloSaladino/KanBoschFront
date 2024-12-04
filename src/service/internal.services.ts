import { baseGet, baseDelete, basePatch, basePost, basePut } from ".";
import { Connections } from "../constants/connections";

export default {
    get:    <T>(url: string) => baseGet<T>(Connections.InternalAPI + url),
    post:   <T>(url: string, payload: T) => basePost<T>(Connections.InternalAPI + url, payload),
    patch:  <T>(url: string, payload: T) => basePatch<T>(Connections.InternalAPI + url, payload),
    put:    <T>(url: string, payload: T) => basePut<T>(Connections.InternalAPI + url, payload),
    delete: <T>(url: string) => baseDelete<T>(Connections.InternalAPI + url),
}