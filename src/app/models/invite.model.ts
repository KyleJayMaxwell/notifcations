export class Invites {
  invites: Array<Invite>;
}

export class Invite {
  invite_id: number;
  sender_id: string;
  sig_id: number;
  invite: string;
  vector: string;
  invite_time: number;
  status: string;
}
