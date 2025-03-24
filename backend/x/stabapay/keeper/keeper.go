package keeper

import (
	"github.com/dymensionxyz/dymension-RDK/x/streamer"
	"stabapay/x/stabapay/types"
)

type Keeper struct {
	cdc        codec.BinaryCodec
	storeKey   storetypes.StoreKey
	bank       types.BankKeeper
	settlement types.SettlementKeeper
}

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey storetypes.StoreKey,
	bk types.BankKeeper,
	sk settlement.Keeper,
) Keeper {
	return Keeper{
		cdc:        cdc,
		storeKey:   storeKey,
		bank:       bk,
		settlement: sk,
	}
}
