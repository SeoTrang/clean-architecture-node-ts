import { Member } from "../domain/Member";

export interface IMemberService {
  getAllMembers(): Member[];
}
