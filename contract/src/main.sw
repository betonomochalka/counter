contract;

abi Pisya {
    #[storage(read, write)]fn increment_bank() -> u64;
    #[storage(read, write)]fn decrement_bank() -> u64;
}

storage {
bank: u64 = 0,
}

impl Pisya for Contract {

    #[storage(read, write)]fn increment_bank() -> u64{
        storage.bank = storage.bank + 1;
        storage.bank
    } 

    #[storage(read, write)]fn decrement_bank() -> u64{
        storage.bank = storage.bank - 1;
        storage.bank
    }

}