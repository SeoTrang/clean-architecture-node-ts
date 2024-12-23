import { IMemberRepository } from "../application/IMemberRepository";
import { Member } from "../domain/Member";

export class MemberRepository implements IMemberRepository {
  private static members: Member[] = [
    new Member(1, "Kirtesh Shah", "G", "Vadodara"),
    new Member(2, "Mahesh Shah", "S", "Dabhoi"),
    new Member(3, "Nitya Shah", "G", "Mumbai"),
    new Member(4, "Dilip Shah", "S", "Dabhoi"),
    new Member(5, "Hansa Shah", "S", "Dabhoi"),
    new Member(6, "Mita Shah", "G", "Surat"),
  ];

  getAllMembers(): Member[] {
    return MemberRepository.members;
  }
}
