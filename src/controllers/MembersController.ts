import { Request, Response } from "express";
import { IMemberService } from "../application/IMemberService";

export class MembersController {
  constructor(private readonly memberService: IMemberService) {}

  getMembers(req: Request, res: Response): void {
    const members = this.memberService.getAllMembers();
    res.json(members);
  }
}
