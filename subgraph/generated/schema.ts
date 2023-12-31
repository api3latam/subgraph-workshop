// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class SetDapiName extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SetDapiName entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type SetDapiName must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SetDapiName", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): SetDapiName | null {
    return changetype<SetDapiName | null>(
      store.get_in_block("SetDapiName", id.toHexString())
    );
  }

  static load(id: Bytes): SetDapiName | null {
    return changetype<SetDapiName | null>(
      store.get("SetDapiName", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get dataFeedId(): Bytes {
    let value = this.get("dataFeedId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set dataFeedId(value: Bytes) {
    this.set("dataFeedId", Value.fromBytes(value));
  }

  get dapiName(): Bytes {
    let value = this.get("dapiName");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set dapiName(value: Bytes) {
    this.set("dapiName", Value.fromBytes(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class UpdatedBeaconSetWithBeacons extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save UpdatedBeaconSetWithBeacons entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type UpdatedBeaconSetWithBeacons must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set(
        "UpdatedBeaconSetWithBeacons",
        id.toBytes().toHexString(),
        this
      );
    }
  }

  static loadInBlock(id: Bytes): UpdatedBeaconSetWithBeacons | null {
    return changetype<UpdatedBeaconSetWithBeacons | null>(
      store.get_in_block("UpdatedBeaconSetWithBeacons", id.toHexString())
    );
  }

  static load(id: Bytes): UpdatedBeaconSetWithBeacons | null {
    return changetype<UpdatedBeaconSetWithBeacons | null>(
      store.get("UpdatedBeaconSetWithBeacons", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get beaconSetId(): Bytes {
    let value = this.get("beaconSetId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set beaconSetId(value: Bytes) {
    this.set("beaconSetId", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class UpdatedBeaconWithSignedData extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save UpdatedBeaconWithSignedData entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type UpdatedBeaconWithSignedData must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set(
        "UpdatedBeaconWithSignedData",
        id.toBytes().toHexString(),
        this
      );
    }
  }

  static loadInBlock(id: Bytes): UpdatedBeaconWithSignedData | null {
    return changetype<UpdatedBeaconWithSignedData | null>(
      store.get_in_block("UpdatedBeaconWithSignedData", id.toHexString())
    );
  }

  static load(id: Bytes): UpdatedBeaconWithSignedData | null {
    return changetype<UpdatedBeaconWithSignedData | null>(
      store.get("UpdatedBeaconWithSignedData", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get beaconId(): Bytes {
    let value = this.get("beaconId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set beaconId(value: Bytes) {
    this.set("beaconId", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class UpdatedOevProxyBeaconSetWithSignedData extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save UpdatedOevProxyBeaconSetWithSignedData entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type UpdatedOevProxyBeaconSetWithSignedData must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set(
        "UpdatedOevProxyBeaconSetWithSignedData",
        id.toBytes().toHexString(),
        this
      );
    }
  }

  static loadInBlock(id: Bytes): UpdatedOevProxyBeaconSetWithSignedData | null {
    return changetype<UpdatedOevProxyBeaconSetWithSignedData | null>(
      store.get_in_block(
        "UpdatedOevProxyBeaconSetWithSignedData",
        id.toHexString()
      )
    );
  }

  static load(id: Bytes): UpdatedOevProxyBeaconSetWithSignedData | null {
    return changetype<UpdatedOevProxyBeaconSetWithSignedData | null>(
      store.get("UpdatedOevProxyBeaconSetWithSignedData", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get beaconSetId(): Bytes {
    let value = this.get("beaconSetId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set beaconSetId(value: Bytes) {
    this.set("beaconSetId", Value.fromBytes(value));
  }

  get proxy(): Bytes {
    let value = this.get("proxy");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set proxy(value: Bytes) {
    this.set("proxy", Value.fromBytes(value));
  }

  get updateId(): Bytes {
    let value = this.get("updateId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set updateId(value: Bytes) {
    this.set("updateId", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class UpdatedOevProxyBeaconWithSignedData extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save UpdatedOevProxyBeaconWithSignedData entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type UpdatedOevProxyBeaconWithSignedData must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set(
        "UpdatedOevProxyBeaconWithSignedData",
        id.toBytes().toHexString(),
        this
      );
    }
  }

  static loadInBlock(id: Bytes): UpdatedOevProxyBeaconWithSignedData | null {
    return changetype<UpdatedOevProxyBeaconWithSignedData | null>(
      store.get_in_block(
        "UpdatedOevProxyBeaconWithSignedData",
        id.toHexString()
      )
    );
  }

  static load(id: Bytes): UpdatedOevProxyBeaconWithSignedData | null {
    return changetype<UpdatedOevProxyBeaconWithSignedData | null>(
      store.get("UpdatedOevProxyBeaconWithSignedData", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get beaconId(): Bytes {
    let value = this.get("beaconId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set beaconId(value: Bytes) {
    this.set("beaconId", Value.fromBytes(value));
  }

  get proxy(): Bytes {
    let value = this.get("proxy");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set proxy(value: Bytes) {
    this.set("proxy", Value.fromBytes(value));
  }

  get updateId(): Bytes {
    let value = this.get("updateId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set updateId(value: Bytes) {
    this.set("updateId", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Withdrew extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Withdrew entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Withdrew must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Withdrew", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Withdrew | null {
    return changetype<Withdrew | null>(
      store.get_in_block("Withdrew", id.toHexString())
    );
  }

  static load(id: Bytes): Withdrew | null {
    return changetype<Withdrew | null>(store.get("Withdrew", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get oevProxy(): Bytes {
    let value = this.get("oevProxy");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set oevProxy(value: Bytes) {
    this.set("oevProxy", Value.fromBytes(value));
  }

  get oevBeneficiary(): Bytes {
    let value = this.get("oevBeneficiary");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set oevBeneficiary(value: Bytes) {
    this.set("oevBeneficiary", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}
