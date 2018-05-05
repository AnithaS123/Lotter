 const HDWalletProvider = require('truffle-hdwallet-provider');
const {
    interface,
    bytecode
} = require('./compile');
const Web3 = require('web3');

const provider = new HDWalletProvider('lecture pizza flock remember coral tone face design panel opera rug fury',
        'https://rinkeby.infura.io/3k6AbYIE1RQMtiqyOYNz');
        const web3 = new Web3(provider);

        const deploy = async () => {
            const accounts = await web3.eth.getAccounts();

            console.log('Attemption to deploy from account', accounts[0]);
            const result = await new web3.eth.Contract(JSON.parse(interface))
                .deploy({
                    data: bytecode
                        })
                .send({
                    gas: '1000000',
                    from: accounts[0]
                });

            console.log('contract to deploy', result.options.address);
        }; deploy();