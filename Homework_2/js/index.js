'use strict'

// 參考：
//
// Why would a JavaScript variable start with a dollar sign?
// https://stackoverflow.com/questions/205853/why-would-a-javascript-variable-start-with-a-dollar-sign
//
// jQuery是什麼，它跟JavaScript有什麼關係？它又有什麼能耐呢？
// https://progressbar.tw/posts/6

let contractAddress = $('#contractAddress');
let deployedContractAddressInput = $('#deployedContractAddressInput');
let loadDeployedContractButton = $('#loadDeployedContractButton');
let deployNewContractButton = $('#deployNewContractButton');

let killContractButton = $('#killContractButton')

let whoami = $('#whoami');
let whoamiButton = $('#whoamiButton');
let copyButton = $('#copyButton');

let update = $('#update');

let logger = $('#logger');

let deposit = $('#deposit');
let depositButton = $('#depositButton');

let withdraw = $('#withdraw');
let withdrawButton = $('#withdrawButton');

let transferEtherTo = $('#transferEtherTo');
let transferEtherValue = $('#transferEtherValue');
let transferEtherButton = $('#transferEtherButton');

let bankAddress = "";
let nowAccount = "";

let web3 = new Web3('http://localhost:8545');

let bank = new web3.eth.Contract(bankAbi);

function log(...inputs) {
	for (let input of inputs) {
		if (typeof input === 'object') {
			input = JSON.stringify(input, null, 2)
		}
		logger.html(input + '\n' + logger.html())
	}
}

init()

async function init() {
	let accounts = await web3.eth.getAccounts()

	for (let account of accounts) {
		// jQuery 語法，並非增加矩陣元素，而是將 HTML 中 id = #whoami 的標籤塞入指定的字串。
		// http://api.jquery.com/append/
		whoami.append(`<option value="${account}">${account}</option>`)
	}

	// jQuery 語法，並非取得此變數的值，而是讀取目前 HTML 中 id = #whoami 標籤的字串。
	// https://api.jquery.com/val/
	nowAccount = whoami.val();

	// jQuery 語法，將對映到 HTML 中 id = #update 標籤的按鈕按下。
	// http://api.jquery.com/trigger/
	update.trigger('click')

	log(accounts, '以太帳戶')
}

// 當按下載入既有合約位址時
loadDeployedContractButton.on('click', function () {
	loadBank(deployedContractAddressInput.val())
})

// 當按下部署合約時
deployNewContractButton.on('click', function () {
	newBank()
})

// 當按下登入按鍵時
/*
whoamiButton.on('click', function () {

	nowAccount = whoami.val();

	update.trigger('click')

})
*/

// 當選擇不同帳號時
// https://api.jquery.com/change/
whoami.on('change', function () {

	nowAccount = whoami.val();

	update.trigger('click')

	alert("Now account is: " + nowAccount)

})

// 當按下複製按鍵時
copyButton.on('click', function () {
	let textarea = $('<textarea />')
	textarea.val(whoami.val()).css({
		width: '0px',
		height: '0px',
		border: 'none',
		visibility: 'none'
	}).prependTo('body')

	textarea.focus().select()

	try {
		if (document.execCommand('copy')) {
			textarea.remove()
			return true
		}
	} catch (e) {
		console.log(e)
	}
	textarea.remove()
	return false
})

// 當按下更新按鍵時
update.on('click', async function () {

	if (bankAddress != "") {
		let ethBalance = await web3.eth.getBalance(nowAccount)
		let bankBalance = await bank.methods.getBankBalance().call({ from: nowAccount })

		log({
			address: bankAddress,
			ethBalance: ethBalance,
			bankBalance: bankBalance
		})
		log('更新帳戶資料')

		$('#ethBalance').text('以太帳戶餘額 (wei): ' + ethBalance)
		$('#bankBalance').text('銀行ETH餘額 (wei): ' + bankBalance)
	}
	else {
		let ethBalance = await web3.eth.getBalance(nowAccount)

		$('#ethBalance').text('以太帳戶餘額 (wei): ' + ethBalance)
		$('#bankBalance').text('銀行ETH餘額 (wei): ')
	}
})

// 當按下刪除合約按鈕時
killContractButton.on('click', async function () {

	if (bankAddress == "") {
		return;
	}

	// 解鎖
	let unlock = await unlockAccount();
	if (!unlock) {
		return;
	}

	// 更新介面 
	waitTransactionStatus();
	// 刪除合約
	bank.methods.kill().send({
		from: nowAccount,
		gas: 3400000
	})
		.on('receipt', function (receipt) {
			log(bankAddress, '成功刪除合約');

			bankAddress = "";
			contractAddress.text('合約位址:' + bankAddress)
			deployedContractAddressInput.val(bankAddress)

			// 觸發更新帳戶資料
			update.trigger('click');

			// 更新介面 
			doneTransactionStatus();
		})
		.on('error', function (error) {
			log(error.toString())
			// 更新介面 
			doneTransactionStatus();
		})
})

// 當按下存款按鍵時
depositButton.on('click', async function () {

	if (bankAddress == "") {
		return;
	}

	// 解鎖
	let unlock = await unlockAccount();
	if (!unlock) {
		return;
	}

	// 更新介面 
	waitTransactionStatus();
	// 存款
	bank.methods.deposit().send({
		from: nowAccount,
		gas: 3400000,
		value: web3.utils.toWei(deposit.val(), 'ether')
	})
		.on('receipt', function (receipt) {
			log(receipt.events.DepositEvent.returnValues, '存款成功')

			// 觸發更新帳戶資料
			update.trigger('click')

			// 更新介面 
			doneTransactionStatus()
		})
		.on('error', function (error) {
			log(error.toString())
			// 更新介面 
			doneTransactionStatus()
		})
})

// 當按下提款按鍵時
withdrawButton.on('click', async function () {

	if (bankAddress == "") {
		return;
	}

	// 解鎖
	let unlock = await unlockAccount();
	if (!unlock) {
		return;
	}

	// 更新介面
	waitTransactionStatus()
	// 提款
	bank.methods.withdraw(parseInt(withdraw.val(), 10)).send({
		from: nowAccount,
		gas: 3400000
	})
		.on('receipt', function (receipt) {
			log(receipt.events.WithdrawEvent.returnValues, '提款成功')

			// 觸發更新帳戶資料
			update.trigger('click')

			// 更新介面 
			doneTransactionStatus()
		})
		.on('error', function (error) {
			log(error.toString())
			// 更新介面 
			doneTransactionStatus()
		})
})

// 當按下轉帳按鍵時
transferEtherButton.on('click', async function () {

	if (bankAddress == "") {
		return;
	}

	// 解鎖
	let unlock = await unlockAccount();
	if (!unlock) {
		return;
	}

	// 更新介面
	waitTransactionStatus()
	// 轉帳
	bank.methods.transfer(transferEtherTo.val(), parseInt(transferEtherValue.val(), 10)).send({
		from: nowAccount,
		gas: 3400000
	})
		.on('receipt', function (receipt) {
			log(receipt.events.TransferEvent.returnValues, '轉帳成功')

			// 觸發更新帳戶資料
			update.trigger('click')

			// 更新介面 
			doneTransactionStatus()
		})
		.on('error', function (error) {
			log(error.toString())
			// 更新介面 
			doneTransactionStatus()
		})
})

// 載入bank合約
function loadBank(address) {
	if (!(address === undefined || address === null || address === '')) {

		let bank_temp = new web3.eth.Contract(bankAbi);
		bank_temp.options.address = address;

		if (bank_temp != undefined) {
			bankAddress = address;
			bank.options.address = bankAddress;

			contractAddress.text('合約位址:' + address)
			log(bank, '載入合約')

			update.trigger('click')
		}
		else {
			log(address, '載入失敗')
		}
	}
}

// 新增bank合約
async function newBank() {

	// 解鎖
	let unlock = await unlockAccount();
	if (!unlock) {
		return;
	}

	// 更新介面
	waitTransactionStatus()

	bank.deploy({
		data: bankBytecode
	})
		.send({
			from: nowAccount,
			gas: 3400000
		})
		.on('receipt', function (receipt) {
			log(receipt, '部署合約')

			// 更新合約介面
			bankAddress = receipt.contractAddress
			bank.options.address = bankAddress;
			contractAddress.text('合約位址:' + receipt.contractAddress)
			deployedContractAddressInput.val(receipt.contractAddress)

			update.trigger('click');

			// 更新介面
			doneTransactionStatus();
		})
}

function waitTransactionStatus() {
	$('#accountStatus').html('帳戶狀態 <b style="color: blue">(等待交易驗證中...)</b>')
}

function doneTransactionStatus() {
	$('#accountStatus').text('帳戶狀態')
}

async function unlockAccount() {
	let password = prompt("請輸入你的密碼", "");
	if (password == null) {
		return false;
	}
	else {
		return web3.eth.personal.unlockAccount(nowAccount, password, 60)
			.then(function (result) {
				return true;
			})
			.catch(function (err) {
				alert("密碼錯誤")
				return false;
			});
	}
}