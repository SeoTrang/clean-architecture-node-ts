import { Member } from "../domain/Member";

export interface IMemberRepository {
  getAllMembers(): Member[];
}
