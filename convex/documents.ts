import { v } from "convex/values"; // basicially used for type defined
import {mutation, query } from './_generated/server';
import { Doc , Id } from "./_generated/dataModel";

export const create = mutation({
    args:{
        title: v.string(), 
        parentDocument: v.optional(v.id("documents")),
        },
        handler: async( ctx , args) => {
            const identity = await ctx.auth.getUserIdentity();

            if  (!identity){
                throw new Error("Not Authenticated");
            }

            const userId = identity.subject;

            const document = await ctx.db.insert("documents",{
                title: args.title,
                parentDocument: args.parentDocument,
                userId,
                isArchived: false,
                isPublished: false,
            });
            return document;
        },
})