import { Replace } from '@helpers/Replace';
import { randomUUID } from 'crypto';
import { Content } from './content';

type BlogProps = {
  title: string;
  content: Content;
  categoryId: string;
  imageUrl: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt?: Date | null;
  authorId: string;
};

export class Blog {
  private _id: string;
  private props: BlogProps;

  constructor(props: Replace<BlogProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      isActive: props.isActive ?? true,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content() {
    return this.props.content;
  }

  public set categoryId(categoryId: string) {
    this.props.categoryId = categoryId;
  }

  public get categoryId() {
    return this.props.categoryId;
  }

  public set imageUrl(imageUrl: string) {
    this.props.imageUrl = imageUrl;
  }

  public get imageUrl() {
    return this.props.imageUrl;
  }

  public activate() {
    this.props.isActive = true;
  }

  public disable() {
    this.props.isActive = false;
  }

  public get isActive() {
    return this.props.isActive;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public update() {
    this.props.updatedAt = new Date();
  }

  public get updatedAt(): Date | null | undefined {
    return this.props.updatedAt;
  }

  public set authorId(authorId: string) {
    this.props.authorId = authorId;
  }

  public get authorId() {
    return this.props.authorId;
  }
}
