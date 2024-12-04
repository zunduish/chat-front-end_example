export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  last_seen: Date;
  contacts: IContact[];
}

export interface IContact {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
  last_seen: Date;
}

export interface IPreviewData {
  title: string;
  image?: string;
  description: string;
  domain: string;
  link: string;
}

export interface IAttachment {
  id: string;
  type: string;
  name: string;
  size: string;
  url: string;
  thumbnail?: string;
  file?: File;
}

export interface IRecording {
  id: string;
  size: string;
  src: string;
  duration: string;
  file?: File;
}

export interface IMessage {
  id: string;
  type?: string;
  content?: string | IRecording;
  date: string;
  sender: IContact;
  replyTo?: string;
  previewData?: IPreviewData;
  attachments?: IAttachment[];
  state: string;
}

export interface IConversation {
  id: string;
  type: string;
  name?: string;
  avatar?: string;
  admins?: string[];
  contacts: IContact[];
  messages: IMessage[];
  pinnedMessage?: IMessage;
  pinnedMessageHidden?: boolean;
  replyMessage?: IMessage;
  unread?: number;
  draft_message: string;
}

export interface IContactGroup {
  letter: string;
  contacts: IContact[];
}

export interface INotification {
  flag: string;
  title: string;
  message: string;
}

export interface ISettings {
  last_seen: boolean;
  readReceipt: boolean;
  joiningGroups: boolean;
  privateMessages: boolean;
  darkMode: boolean;
  borderedTheme: boolean;
  allowNotifications: boolean;
  keepNotifications: boolean;
}

export interface ICall {
  type: string;
  direction: string;
  status: string;
  date: string;
  length: string;
  members: IContact[];
  adminIds: string[];
}

export interface IEmoji {
  n: string[];
  u: string;
  r?: string;
  v?: string[];
}
