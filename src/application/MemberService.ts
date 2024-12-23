import { IMemberService } from "./IMemberService";
import { IMemberRepository } from "./IMemberRepository";
import { Member } from "../domain/Member";

export class MemberService implements IMemberService {
  constructor(private readonly memberRepository: IMemberRepository) {}

  getAllMembers(): Member[] {
    return this.memberRepository.getAllMembers();
  }
}
