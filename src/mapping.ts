import { Transfer as TransferEvent, TransferFromCall } from "../generated/LnProxyERC20/LnProxyERC20"
import { Transfer as TransferBnbEvent } from "../generated/Bnb/Bnb"
import { Transfer as TransferLinkEvent } from "../generated/Link/Link"
import { Transfer, TransferBnb, TransferFrom, TransferLink } from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  const entity = new Transfer(event.transaction.hash.toHex() + '-' + event.logIndex.toString());
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;
  entity.timestamp = event.block.timestamp;
  entity.block = event.block.number;
  entity.save();
}

export function handleTransferFrom(call: TransferFromCall): void {
  const entity = new TransferFrom(call.transaction.hash.toHex());
  entity.from = call.inputs.from;
  entity.to = call.inputs.to;
  entity.value = call.inputs.value;
  entity.timestamp = call.block.timestamp;
  entity.block = call.block.number;
  entity.save();
}

export function handleTransferBnb(event: TransferBnbEvent): void {
  const entity = new TransferBnb(event.transaction.hash.toHex() + '-' + event.logIndex.toString());
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;
  entity.timestamp = event.block.timestamp;
  entity.block = event.block.number;
  entity.save();
}

export function handleTransferLink(event: TransferLinkEvent): void {
  const entity = new TransferLink(event.transaction.hash.toHex() + '-' + event.logIndex.toString());
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;
  entity.timestamp = event.block.timestamp;
  entity.block = event.block.number;
  entity.save();
}