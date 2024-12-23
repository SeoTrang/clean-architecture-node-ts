import express, { Application } from "express";
import { MemberService } from "./application/MemberService";
import { MemberRepository } from "./infrastructure/MemberRepository";
import { MembersController } from "./controllers/MembersController";

const app: Application = express();

// Dependency Injection
const memberRepository = new MemberRepository();
const memberService = new MemberService(memberRepository);
const membersController = new MembersController(memberService);

// Routes
app.get("/api/members", (req, res) => membersController.getMembers(req, res));

export default app;
