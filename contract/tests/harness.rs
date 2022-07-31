use fuels::{prelude::*, tx::ContractId};

// Load abi from json
abigen!(MyContract, "out/debug/contract-abi.json");

async fn get_contract_instance() -> (MyContract, ContractId) {
    // Launch a local network and deploy the contract
    let wallet = launch_provider_and_get_wallet().await;

    let id = Contract::deploy(
        "./out/debug/contract.bin",
        &wallet,
        TxParameters::default(),
        StorageConfiguration::with_storage_path(Some(
            "./out/debug/contract-storage_slots.json".to_string(),
        )),
    )   
    .await
    .unwrap();

    let instance = MyContract::new(id.to_string(), wallet);

    (instance, id)
}

#[tokio::test]
async fn can_increment() {
    let (instance, _id) = get_contract_instance().await;

    let result =  instance
        .increment_bank()
        .call()
        .await
        .unwrap();

    assert_eq!(1, result.value);
    println!("{}", result.value);
    // Now you have an instance of your contract you can use to test each function
}

