package main

var (
	ContractName string = "Bank"
	CompilerName string = "<stdin>:" + ContractName
	BankContract string = `
    //pragma solidity ^0.4.25;
    pragma solidity ^0.5.0;
    
    contract ` + ContractName + ` {
        // 此合約的擁有者。
        address private _owner;
    
        // 儲存所有會員的 ether 餘額。
        mapping (address => uint256) private _balance;
    
        // 儲存所有會員的 bank coin 餘額。
        mapping (address => uint256) private _coinBalance;
    
        // 事件們，用於通知前端 web3.js。
        event DepositEvent(address indexed from, uint256 value, uint256 timestamp);
        event WithdrawEvent(address indexed from, uint256 value, uint256 timestamp);
        event TransferEvent(address indexed from, address indexed to, uint256 value, uint256 timestamp);
    
        event MintEvent(address indexed from, uint256 value, uint256 timestamp);
        event BuyCoinEvent(address indexed from, uint256 value, uint256 timestamp);
        event TransferCoinEvent(address indexed from, address indexed to, uint256 value, uint256 timestamp);
        event TransferOwnerEvent(address indexed oldOwner, address indexed newOwner, uint256 timestamp);
    
        // 修飾符。
        modifier isOwner() {
            // 要求只能是部署此合約的地址才能執行此函數。
            require(_owner == msg.sender, "You are not owner.");
            
            // 修飾符結束符號。
            _;
        }
    
        // 建構子，一部署就將部署此合約的地址儲存在 owner 內。
        constructor() public payable {
            _owner = msg.sender;
        }
    
        // 存款。
        function deposit() public payable {
            // 將呼叫此函數時，附帶的 ether 量累加進對映的地址。
            _balance[msg.sender] += msg.value;
    
            // emit DepositEvent：完成存款，發出事件。
            emit DepositEvent(msg.sender, msg.value, block.timestamp);
        }
    
        // 提款。
        function withdraw(uint256 etherValue) public {
            // 1 ether = 1,000,000,000,000,000,000 wei。
            uint256 weiValue = etherValue * 1 ether;
    
            // 要提款，必須要確認存在對映 msg.sender 的 ether 量大於想要提出的金額。
            require(_balance[msg.sender] >= weiValue, "Your ether balances are not enough.");
    
            // 將合約內指定的 ether 量轉移至 msg.sender。
            msg.sender.transfer(weiValue);
    
            // 將對映的 msg.sender 的 ether 量扣除。
            _balance[msg.sender] -= weiValue;
    
            // emit WithdrawEvent：完成提款，發出事件。
            emit WithdrawEvent(msg.sender, etherValue, block.timestamp);
        }
    
        // 轉帳。
        function transfer(address to, uint256 etherValue) public {
            // 1 ether = 1,000,000,000,000,000,000 wei。
            uint256 weiValue = etherValue * 1 ether;
    
            // 要轉帳，必須要確認存在此合約內對映地址的 ether 大於想要轉出的金額。
            require(_balance[msg.sender] >= weiValue, "Your ether balances are not enough.");
    
            // 將對映的 msg.sender 的 ether 量扣除。
            _balance[msg.sender] -= weiValue;
            
            // 將指定的 ether 量累加進接收的對映地址。
            _balance[to] += weiValue;
    
            // emit TransferEvent：完成轉帳，發出事件。
            emit TransferEvent(msg.sender, to, etherValue, block.timestamp);
        }
    
        // mint bank coin。
        function mint(uint256 coinValue) public isOwner {
            // 1 ether = 1,000,000,000,000,000,000 wei。
            uint256 value = coinValue * 1 ether;
    
            // 增加 msg.sender（= owner）的 bank coin balance。
            // your code。
            _coinBalance[msg.sender] += value;
    
            // emit MintEvent：完成鑄金，將鑄到的 bank coin 給 msg.sender（= owner），並發出事件。
            // your code。
            emit MintEvent(msg.sender, coinValue, block.timestamp);
        }
    
        // 使用 msg.sender 在 bank 中的 ether，向 owner 購買 bank coin。
        function buy(uint256 coinValue) public {
            // 1 ether = 1,000,000,000,000,000,000 wei。
            uint256 value = coinValue * 1 ether;
    
            // require owner 的 bank coin balance 不小於 value。
            // your code。
            require(_coinBalance[_owner] >= value, "Owner's bank coin balances are not enough.");
    
            // require msg.sender 的 etherBalance 不小於 value。
            // your code。
            require(_balance[msg.sender] >= value, "Your ether balances are not enough.");
    
            // msg.sender 的 etherBalance 減少 value。
            // your code。
            _balance[msg.sender] -= value;
            
            // owner 的 etherBalance 增加 value。
            // your code。
            _balance[_owner] += value;
    
            // msg.sender 的 bank coin balance 增加 value。
            // your code。
            _coinBalance[msg.sender] += value;
            
            // owner 的 bank coin balance 減少 value。
            // your code。
            _coinBalance[_owner] -= value;
    
            // emit BuyCoinEvent：msg.sender 完成 bank coin 購買，發出事件。
            // your code。
            emit BuyCoinEvent(msg.sender, coinValue, block.timestamp);
        }
    
        // 轉移 coin。
        function transferCoin(address to, uint256 coinValue) public {
            // 1 ether = 1,000,000,000,000,000,000 wei。
            uint256 value = coinValue * 1 ether;
    
            // require msg.sender 的 bank coin balance 不小於 value。
            // your code。
            require(_coinBalance[msg.sender] >= value, "Your bank coin balances are not enough.");
    
            // msg.sender 的 bank coin balance 減少 value 量。
            // your code。
            _coinBalance[msg.sender] -= value;
            
            // to 的 bank coin balance 增加 value 量。
            // your code。
            _coinBalance[to] += value;
    
            // emit TransferCoinEvent：完成 coin 轉移，發出事件。
            // your code。
            emit TransferCoinEvent(msg.sender, to, coinValue, block.timestamp);
        }
    
        // 檢查銀行帳戶 ether 餘額。
        function getBankBalance() public view returns (uint256) {
            return _balance[msg.sender];
        }
    
        // 檢查 bank coin 餘額。
        function getCoinBalance() public view returns (uint256) {
            return _coinBalance[msg.sender];
        }
    
        // get owner：取得目前此合約的 owner 地址。
        function getOwner() public view returns (address)  {
            return _owner;
        }
    
        // 轉移 owner。
        function transferOwner(address newOwner) public isOwner {
            // 檢查 newOwner 不是空地址，以避免此合約失去擁有者。
            require(newOwner != address(0));
            
            // emit TransferOwnerEvent：完成擁有者轉移，發出事件。
            // your code。
            emit TransferOwnerEvent(_owner, newOwner, block.timestamp);
            
            // transfer ownership：轉移擁有者。
            // your code。
            _owner = newOwner;
        }
    
        // 將此合約從 Blockchain 中銷毀，並把合約內所有 ether 發送到指定地址。
        function kill() public isOwner {
            selfdestruct(msg.sender);
        }
    }
    `
)
