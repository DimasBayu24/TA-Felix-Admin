export interface IPost {
  id: string;
  title: string;
  content: string;
  status: 'published' | 'draft' | 'rejected';
  createdAt: string;
  category: ICategory;
}

export interface IRole {
  id: string;
  title: string;
}

export interface IAcl {
  id: string;
  name: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  permitted: string[];
  isPublic: boolean;
  isIdempotent: boolean;
}

interface IAddressDetail {
  province: string;
  district: string;
  city: string;
  address: string;
}
export interface IUser {
  id: string;
  name: string;
  email: string;
  username: string;
  status: 'UNVERIFIED' | 'EMAIL_VERIFIED' | 'PHONE_VERIFIED' | 'VERIFIED';
  roleIds: string[];
  avatar?: string;
  gender?: string;
  phoneNumber?: string;
  address?: IAddressDetail;
  balance?: number;
}

export interface ICategory {
  id: string;
  title: string;
  slug: string;
  parentId: string;
}

export interface IEntrepreneur {
  id: string;
  expiredAt: Date;
}

export interface IProduct {
  id: string;
  name: string;
  brand: string;
  categoryId: string;
  description: string;
  weight: number;
  imageId: string;
  ownerEmail: string;
  stock: number;
  price: number;
}

export interface IDestination {
  ID: string;
  Place: string;
  PlaceOption: string;
  Price: number;
  PictureUrl: string;
  Description: string;
}

export interface ICustomer {
  ID: string;
  Username: string;
  Fullname: string;
  Role: string;
}

export interface IOrder {
  ID: string;
  UserID: string;
  Status: 'not_done' | 'done';
  TransportationID: string;
  TransportationQty: number;
  TotalPrice: number;
}

export interface IProductPackage {
  ID: string;
  Package: string;
  DestinationCity: string;
  PricePackage: number;
  PictureUrl: string;
  Description: string;
  TransportationID: number;
}

export interface ITransportation {
  ID: string;
  Type: string;
  Size: number;
  Price: number;
}

export interface IOrderItem {
  ID: string;
  OrderID: string;
  DestinationID: string;
}

export interface IProductOrder {
  id: string;
  entrepreneurId: string;
  productId: string;
  quantity: number;
  orderStatus: string;
  trackerId: string;
}

export interface ITalent {
  id: string;
  title: string;
  isExpert: boolean;
  joinAt: string;
  skillSet: string;
  bio: string;
  portfolio: string;
  banner: string;
}

export interface IService {
  id: string;
  talentId: string;
  categoryId: string;
  title: string;
  description: string;
  isConsultant: boolean;
  consultantPrice: number;
  thumbnail: string;
}

export interface IServicePackage {
  id: string;
  serviceId: string;
  title: string;
  description: string;
  deliveryTime: number;
  price: number;
}

export interface IExportOffer {
  id: string;
  title: string;
  region: string;
  categoryId: string;
  description: string;
  offererContact: string;
}

export interface IExportCourse {
  id: string;
  title: string;
  organizer: string;
  description: string;
  memberMonthMinimum: string;
}

export interface ICourseSession {
  id: string;
  exporterId: string;
  courseId: string;
  currentChapterNumber: string;
  certificateLink: string;
  isFinished: boolean;
}

export interface ICourseChapter {
  id: string;
  courseId: string;
  chapterNumber: string;
  title: string;
  description: string;
  videoUrl: string;
  explanation: string;
}

export interface IExporter {
  id: string;
  joinedAt: string;
  expiredAt: string;
}

export interface IAcademy {
  id: string;
  title: string;
  organizer: string;
  description: string;
  eventTime: number;
  eventContact: string;
  eventLink: string;
  isCourse: boolean;
  registrationLink: string;
  categoryId: string;
  eventPicture: number;
}
