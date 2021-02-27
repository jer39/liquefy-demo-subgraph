import { BigInt, ByteArray, crypto } from "@graphprotocol/graph-ts"
import {
  Contract,
  AdminChanged,
  Approval,
  TargetUpdated,
  Transfer as TransferEvent,
  candidateChanged
} from "../generated/Contract/Contract"
import { Transfer } from "../generated/schema"

export function handleAdminChanged(event: AdminChanged): void {}

export function handleApproval(event: Approval): void {}

export function handleTargetUpdated(event: TargetUpdated): void {}

export function handleTransfer(event: TransferEvent): void {
  const entity = new Transfer(event.transaction.hash.toHex() + '-' + event.logIndex.toString());
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;
  entity.timestamp = event.block.timestamp;
  entity.block = event.block.number;
  entity.save();
}

export function handlecandidateChanged(event: candidateChanged): void {}
