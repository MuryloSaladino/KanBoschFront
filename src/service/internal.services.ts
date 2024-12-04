import { baseGet, baseDelete, basePatch, basePost, basePut } from ".";
import { Connections } from "../constants/connections";

export default {
    get:    (url: string) => baseGet(Connections.InternalAPI + url),
    post:   <T>(url: string, payload: T) => basePost(Connections.InternalAPI + url, payload),
    patch:  <T>(url: string, payload: T) => basePatch(Connections.InternalAPI + url, payload),
    put:    <T>(url: string, payload: T) => basePut(Connections.InternalAPI + url, payload),
    delete: (url: string) => baseDelete(Connections.InternalAPI + url),
}