import puter from "@heyputer/puter.js";
import { STORAGE_PATHS } from "./constants";

export const signIn = async () => await puter.auth.signIn();

export const signOut = () => puter.auth.signOut();

export const getCurrentUser = async () => {
    try {
        return await puter.auth.getUser();
        
    }catch {
        return null;
    }
}

export const createProject = async ({ item, visibility }: { item: any; visibility: string }) => {
    try {
        const key = `${STORAGE_PATHS.ROOT}:${item.id}`;
        await puter.kv.set(key, JSON.stringify(item));
        return item;
    } catch (error) {
        console.error("Failed to create project:", error);
        return null;
    }
};

export const getProjects = async () => {
    try {
        const keys = await puter.kv.list(`${STORAGE_PATHS.ROOT}:`);
        const projects = await Promise.all(
            keys.map(async (key: string) => {
                const data = await puter.kv.get(key);
                return JSON.parse(data);
            })
        );
        return projects.sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
        console.error("Failed to get projects:", error);
        return [];
    }
};

export const getProjectById = async ({ id }: { id: string }) => {
    try {
        const key = `${STORAGE_PATHS.ROOT}:${id}`;
        const data = await puter.kv.get(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Failed to get project:", error);
        return null;
    }
};