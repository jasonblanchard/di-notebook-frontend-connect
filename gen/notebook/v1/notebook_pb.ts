// @generated by protoc-gen-es v0.0.10 with parameter "target=ts"
// @generated from file notebook/v1/notebook.proto (package notebook.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {BoolValue, Int32Value, Message, proto3, Timestamp} from "@bufbuild/protobuf";

/**
 * @generated from message notebook.v1.Entry
 */
export class Entry extends Message<Entry> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  /**
   * @generated from field: string text = 2;
   */
  text = "";

  /**
   * @generated from field: string creator_id = 3;
   */
  creatorId = "";

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 4;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 5;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp delete_time = 6;
   */
  deleteTime?: Timestamp;

  constructor(data?: PartialMessage<Entry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "notebook.v1.Entry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "creator_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "created_at", kind: "message", T: Timestamp },
    { no: 5, name: "updated_at", kind: "message", T: Timestamp },
    { no: 6, name: "delete_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Entry {
    return new Entry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Entry {
    return new Entry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Entry {
    return new Entry().fromJsonString(jsonString, options);
  }

  static equals(a: Entry | PlainMessage<Entry> | undefined, b: Entry | PlainMessage<Entry> | undefined): boolean {
    return proto3.util.equals(Entry, a, b);
  }
}

/**
 * @generated from message notebook.v1.ReadAuthorEntryRequest
 */
export class ReadAuthorEntryRequest extends Message<ReadAuthorEntryRequest> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  constructor(data?: PartialMessage<ReadAuthorEntryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "notebook.v1.ReadAuthorEntryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReadAuthorEntryRequest {
    return new ReadAuthorEntryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReadAuthorEntryRequest {
    return new ReadAuthorEntryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReadAuthorEntryRequest {
    return new ReadAuthorEntryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ReadAuthorEntryRequest | PlainMessage<ReadAuthorEntryRequest> | undefined, b: ReadAuthorEntryRequest | PlainMessage<ReadAuthorEntryRequest> | undefined): boolean {
    return proto3.util.equals(ReadAuthorEntryRequest, a, b);
  }
}

/**
 * @generated from message notebook.v1.ReadAuthorEntryResponse
 */
export class ReadAuthorEntryResponse extends Message<ReadAuthorEntryResponse> {
  /**
   * @generated from field: notebook.v1.Entry entry = 1;
   */
  entry?: Entry;

  constructor(data?: PartialMessage<ReadAuthorEntryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "notebook.v1.ReadAuthorEntryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entry", kind: "message", T: Entry },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReadAuthorEntryResponse {
    return new ReadAuthorEntryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReadAuthorEntryResponse {
    return new ReadAuthorEntryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReadAuthorEntryResponse {
    return new ReadAuthorEntryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ReadAuthorEntryResponse | PlainMessage<ReadAuthorEntryResponse> | undefined, b: ReadAuthorEntryResponse | PlainMessage<ReadAuthorEntryResponse> | undefined): boolean {
    return proto3.util.equals(ReadAuthorEntryResponse, a, b);
  }
}

/**
 * @generated from message notebook.v1.BeginNewEntryRequest
 */
export class BeginNewEntryRequest extends Message<BeginNewEntryRequest> {
  /**
   * @generated from field: string text = 1;
   */
  text = "";

  constructor(data?: PartialMessage<BeginNewEntryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "notebook.v1.BeginNewEntryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BeginNewEntryRequest {
    return new BeginNewEntryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BeginNewEntryRequest {
    return new BeginNewEntryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BeginNewEntryRequest {
    return new BeginNewEntryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: BeginNewEntryRequest | PlainMessage<BeginNewEntryRequest> | undefined, b: BeginNewEntryRequest | PlainMessage<BeginNewEntryRequest> | undefined): boolean {
    return proto3.util.equals(BeginNewEntryRequest, a, b);
  }
}

/**
 * @generated from message notebook.v1.BeginNewEntryResponse
 */
export class BeginNewEntryResponse extends Message<BeginNewEntryResponse> {
  /**
   * @generated from field: notebook.v1.Entry entry = 1;
   */
  entry?: Entry;

  constructor(data?: PartialMessage<BeginNewEntryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "notebook.v1.BeginNewEntryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entry", kind: "message", T: Entry },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BeginNewEntryResponse {
    return new BeginNewEntryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BeginNewEntryResponse {
    return new BeginNewEntryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BeginNewEntryResponse {
    return new BeginNewEntryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: BeginNewEntryResponse | PlainMessage<BeginNewEntryResponse> | undefined, b: BeginNewEntryResponse | PlainMessage<BeginNewEntryResponse> | undefined): boolean {
    return proto3.util.equals(BeginNewEntryResponse, a, b);
  }
}

/**
 * @generated from message notebook.v1.WriteToEntryRequest
 */
export class WriteToEntryRequest extends Message<WriteToEntryRequest> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  /**
   * @generated from field: string text = 2;
   */
  text = "";

  constructor(data?: PartialMessage<WriteToEntryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "notebook.v1.WriteToEntryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WriteToEntryRequest {
    return new WriteToEntryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WriteToEntryRequest {
    return new WriteToEntryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WriteToEntryRequest {
    return new WriteToEntryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: WriteToEntryRequest | PlainMessage<WriteToEntryRequest> | undefined, b: WriteToEntryRequest | PlainMessage<WriteToEntryRequest> | undefined): boolean {
    return proto3.util.equals(WriteToEntryRequest, a, b);
  }
}

/**
 * @generated from message notebook.v1.WriteToEntryResponse
 */
export class WriteToEntryResponse extends Message<WriteToEntryResponse> {
  /**
   * @generated from field: notebook.v1.Entry entry = 1;
   */
  entry?: Entry;

  constructor(data?: PartialMessage<WriteToEntryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "notebook.v1.WriteToEntryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entry", kind: "message", T: Entry },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WriteToEntryResponse {
    return new WriteToEntryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WriteToEntryResponse {
    return new WriteToEntryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WriteToEntryResponse {
    return new WriteToEntryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: WriteToEntryResponse | PlainMessage<WriteToEntryResponse> | undefined, b: WriteToEntryResponse | PlainMessage<WriteToEntryResponse> | undefined): boolean {
    return proto3.util.equals(WriteToEntryResponse, a, b);
  }
}

/**
 * @generated from message notebook.v1.ListEntriesRequest
 */
export class ListEntriesRequest extends Message<ListEntriesRequest> {
  /**
   * @generated from field: int32 page_size = 1;
   */
  pageSize = 0;

  /**
   * @generated from field: int32 page_token = 2;
   */
  pageToken = 0;

  constructor(data?: PartialMessage<ListEntriesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "notebook.v1.ListEntriesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "page_token", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListEntriesRequest {
    return new ListEntriesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListEntriesRequest {
    return new ListEntriesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListEntriesRequest {
    return new ListEntriesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListEntriesRequest | PlainMessage<ListEntriesRequest> | undefined, b: ListEntriesRequest | PlainMessage<ListEntriesRequest> | undefined): boolean {
    return proto3.util.equals(ListEntriesRequest, a, b);
  }
}

/**
 * @generated from message notebook.v1.ListEntriesResponse
 */
export class ListEntriesResponse extends Message<ListEntriesResponse> {
  /**
   * @generated from field: repeated notebook.v1.Entry entries = 1;
   */
  entries: Entry[] = [];

  /**
   * @generated from field: google.protobuf.Int32Value next_page_token = 2;
   */
  nextPageToken?: number;

  /**
   * @generated from field: int32 total_size = 3;
   */
  totalSize = 0;

  /**
   * @generated from field: google.protobuf.BoolValue has_next_page = 4;
   */
  hasNextPage?: boolean;

  constructor(data?: PartialMessage<ListEntriesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "notebook.v1.ListEntriesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entries", kind: "message", T: Entry, repeated: true },
    { no: 2, name: "next_page_token", kind: "message", T: Int32Value },
    { no: 3, name: "total_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "has_next_page", kind: "message", T: BoolValue },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListEntriesResponse {
    return new ListEntriesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListEntriesResponse {
    return new ListEntriesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListEntriesResponse {
    return new ListEntriesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListEntriesResponse | PlainMessage<ListEntriesResponse> | undefined, b: ListEntriesResponse | PlainMessage<ListEntriesResponse> | undefined): boolean {
    return proto3.util.equals(ListEntriesResponse, a, b);
  }
}

/**
 * @generated from message notebook.v1.DeleteEntryRequest
 */
export class DeleteEntryRequest extends Message<DeleteEntryRequest> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  constructor(data?: PartialMessage<DeleteEntryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "notebook.v1.DeleteEntryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteEntryRequest {
    return new DeleteEntryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteEntryRequest {
    return new DeleteEntryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteEntryRequest {
    return new DeleteEntryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteEntryRequest | PlainMessage<DeleteEntryRequest> | undefined, b: DeleteEntryRequest | PlainMessage<DeleteEntryRequest> | undefined): boolean {
    return proto3.util.equals(DeleteEntryRequest, a, b);
  }
}

/**
 * @generated from message notebook.v1.DeleteEntryResponse
 */
export class DeleteEntryResponse extends Message<DeleteEntryResponse> {
  /**
   * @generated from field: notebook.v1.Entry entry = 1;
   */
  entry?: Entry;

  constructor(data?: PartialMessage<DeleteEntryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "notebook.v1.DeleteEntryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entry", kind: "message", T: Entry },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteEntryResponse {
    return new DeleteEntryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteEntryResponse {
    return new DeleteEntryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteEntryResponse {
    return new DeleteEntryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteEntryResponse | PlainMessage<DeleteEntryResponse> | undefined, b: DeleteEntryResponse | PlainMessage<DeleteEntryResponse> | undefined): boolean {
    return proto3.util.equals(DeleteEntryResponse, a, b);
  }
}

/**
 * @generated from message notebook.v1.UnDeleteEntryRequest
 */
export class UnDeleteEntryRequest extends Message<UnDeleteEntryRequest> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  constructor(data?: PartialMessage<UnDeleteEntryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "notebook.v1.UnDeleteEntryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnDeleteEntryRequest {
    return new UnDeleteEntryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnDeleteEntryRequest {
    return new UnDeleteEntryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnDeleteEntryRequest {
    return new UnDeleteEntryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UnDeleteEntryRequest | PlainMessage<UnDeleteEntryRequest> | undefined, b: UnDeleteEntryRequest | PlainMessage<UnDeleteEntryRequest> | undefined): boolean {
    return proto3.util.equals(UnDeleteEntryRequest, a, b);
  }
}

/**
 * @generated from message notebook.v1.UnDeleteEntryResponse
 */
export class UnDeleteEntryResponse extends Message<UnDeleteEntryResponse> {
  /**
   * @generated from field: notebook.v1.Entry entry = 1;
   */
  entry?: Entry;

  constructor(data?: PartialMessage<UnDeleteEntryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "notebook.v1.UnDeleteEntryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entry", kind: "message", T: Entry },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnDeleteEntryResponse {
    return new UnDeleteEntryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnDeleteEntryResponse {
    return new UnDeleteEntryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnDeleteEntryResponse {
    return new UnDeleteEntryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UnDeleteEntryResponse | PlainMessage<UnDeleteEntryResponse> | undefined, b: UnDeleteEntryResponse | PlainMessage<UnDeleteEntryResponse> | undefined): boolean {
    return proto3.util.equals(UnDeleteEntryResponse, a, b);
  }
}

