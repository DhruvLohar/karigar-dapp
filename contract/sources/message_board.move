module owner_addr::StorageDemo {
    use std::signer;

    struct StakePool has key, drop {
        amount: u64
    }

    fun add_user(account: &signer) {
        let amount: u64 = 0;
        move_to(account, StakePool {amount})
    }

    fun read_pool(account: address): u64 acquires StakePool {
        borrow_global<StakePool>(account).amount
    }

    fun stake(account: address) acquires StakePool {
        let entry = &mut borrow_global_mut<StakePool>(account).amount;
        *entry = *entry + 100;
    }

    fun unstake(account: address) acquires StakePool {
        let entry = &mut borrow_global_mut<StakePool>(account).amount;
        *entry = 0;
    }

    fun remove_user(account: &signer) acquires StakePool {
        move_from<StakePool>(signer::address_of(account));
    }

    fun confirm_user(account: address): bool {
        exists<StakePool>(account)
    }

    #[test_only]
    use std::debug::print;

    #[test_only]
    use std::string::{utf8};

    #[test(user = @0x123)]
    fun test_function(user: signer) acquires StakePool {

        add_user(&user);
        assert!(read_pool(signer::address_of(&user)) == 0, 1);
        print(&utf8(b"User Added Successfully!"));

        stake(signer::address_of(&user));
        assert!(read_pool(signer::address_of(&user)) == 100, 1);
        print(&utf8(b"User Staked 100 Tokens!"));

        unstake(signer::address_of(&user));
        assert!(read_pool(signer::address_of(&user)) == 0, 1);
        print(&utf8(b"User Unstaked from Pool!"));

        remove_user(&user);
        assert!(confirm_user(signer::address_of(&user)) == false, 1);
        print(&utf8(b"User removed from StakePool!"));
    }

}