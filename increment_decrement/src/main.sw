contract;

abi Pisya {
    #[storage(write)]fn initialize_bank(value: u64) -> u64;
    #[storage(read, write)]fn increment_bank() -> u64;
    #[storage(read, write)]fn decrement_bank() -> u64;
    #[storage(read)]fn get_bank() -> u64;
}

storage {
    bank: u64 = 0,
}

impl Pisya for Contract {

    #[storage(write)]fn initialize_bank(value: u64) -> u64{
        storage.bank = value;
        value
    } 

    #[storage(read, write)]fn increment_bank() -> u64{
        storage.bank = storage.bank + 1;
        storage.bank
    } 

    #[storage(read, write)]fn decrement_bank() -> u64{
        storage.bank = storage.bank - 1;
        storage.bank
    }

    #[storage(read)]fn get_bank() -> u64{
        storage.bank
    } 
}