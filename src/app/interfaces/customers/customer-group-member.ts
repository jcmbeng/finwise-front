/**
 * Interface for Customer Group Member
 */
export interface CustomerGroupMember {
    id?: string;
    groupId: string;
    memberId: string;
    memberRole?: string;
    joinedAt?: string;
    isActive?: boolean;
}
