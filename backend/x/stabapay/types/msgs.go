package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

type MsgInstantPay struct {
	Creator  sdk.AccAddress
	Receiver sdk.AccAddress 
	Amount   sdk.Coin
}

func (msg MsgInstantPay) Route() string { return "stabapay" }
func (msg MsgInstantPay) Type() string  { return "instant_pay" }
func (msg MsgInstantPay) ValidateBasic() error {
	if msg.Amount.Amount.LT(sdk.NewInt(1)) {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidCoins, "amount too small")
	}
	return nil
}