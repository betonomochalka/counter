contract;

abi Pisya {
    #[storage(write)]fn initialize_bank(value: u64) -> u64;
    #[storage(read, write)]fn increment_bank(param: u64) -> u64;
    #[storage(read, write)]fn decrement_bank(param: u64) -> u64;
    #[storage(read)]fn counter() -> u64;
}

storage {
bank: u64 = 0,
}

impl Pisya for Contract {

    #[storage(write)]fn initialize_bank(value: u64) -> u64{
        storage.bank = value;
        value
    } 

    #[storage(read, write)]fn increment_bank(param: u64) -> u64 {
        storage.bank += param;
        storage.bank
  }

    #[storage(read, write)]fn decrement_bank(param: u64) -> u64{
        storage.bank -= param;
        storage.bank
    }

    #[storage(read)]fn counter() -> u64 {
        storage.bank
  }

}