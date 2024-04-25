const fs = require('fs')

// Function to generate genesis JSON
function generateGenesisJson() {
  const genesis = {
    "name": "mind-smart-chain",
    "genesis": {
        "nonce": "0x0000000000000000",
        "timestamp": "0x0",
        "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000f884f87e94394089c9a3fd81ca5e0a9dbc9d1020dfb99c2605943fac5a12314fdc0935586fbdb47aed57abb1dbb294f4daeb189bbe02920523d15da9a34d104afe858d94040cda93502d34517781dad158159639e6cd4c9a94a7f680dc3f37267f49218f0a4cbad9af0ccec6c29498aea18c1e71fa3b63ff22dbdccba0a5c424ac9e80c0c080",
        "gasLimit": "0x500000",
        "difficulty": "0x1",
        "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "coinbase": "0x0000000000000000000000000000000000000000",
        "alloc": {
            "0x0000000000000000000000000000000000001001": {
                "code": "0x6080604052600436106101185760003560e01c80637a6eea37116100a0578063d94c111b11610064578063d94c111b1461040a578063e387a7ed14610433578063e804fbf61461045e578063f90ecacc14610489578063facd743b146104c657610186565b80637a6eea37146103215780637dceceb81461034c578063af6da36e14610389578063c795c077146103b4578063ca1e7819146103df57610186565b8063373d6132116100e7578063373d6132146102595780633a4b66f1146102845780633c561f041461028e57806351a9ab32146102b9578063714ff425146102f657610186565b806302b751991461018b578063065ae171146101c85780632367f6b5146102055780632def66201461024257610186565b366101865761013c3373ffffffffffffffffffffffffffffffffffffffff16610503565b1561017c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101739061178a565b60405180910390fd5b610184610516565b005b600080fd5b34801561019757600080fd5b506101b260048036038101906101ad9190611380565b6105ed565b6040516101bf91906117e5565b60405180910390f35b3480156101d457600080fd5b506101ef60048036038101906101ea9190611380565b610605565b6040516101fc91906116ed565b60405180910390f35b34801561021157600080fd5b5061022c60048036038101906102279190611380565b610625565b60405161023991906117e5565b60405180910390f35b34801561024e57600080fd5b5061025761066e565b005b34801561026557600080fd5b5061026e610759565b60405161027b91906117e5565b60405180910390f35b61028c610763565b005b34801561029a57600080fd5b506102a36107cc565b6040516102b091906116cb565b60405180910390f35b3480156102c557600080fd5b506102e060048036038101906102db9190611380565b610972565b6040516102ed9190611708565b60405180910390f35b34801561030257600080fd5b5061030b610a12565b60405161031891906117e5565b60405180910390f35b34801561032d57600080fd5b50610336610a1c565b60405161034391906117ca565b60405180910390f35b34801561035857600080fd5b50610373600480360381019061036e9190611380565b610a28565b60405161038091906117e5565b60405180910390f35b34801561039557600080fd5b5061039e610a40565b6040516103ab91906117e5565b60405180910390f35b3480156103c057600080fd5b506103c9610a46565b6040516103d691906117e5565b60405180910390f35b3480156103eb57600080fd5b506103f4610a4c565b60405161040191906116a9565b60405180910390f35b34801561041657600080fd5b50610431600480360381019061042c91906113ad565b610ada565b005b34801561043f57600080fd5b50610448610b31565b60405161045591906117e5565b60405180910390f35b34801561046a57600080fd5b50610473610b37565b60405161048091906117e5565b60405180910390f35b34801561049557600080fd5b506104b060048036038101906104ab91906113f6565b610b41565b6040516104bd919061168e565b60405180910390f35b3480156104d257600080fd5b506104ed60048036038101906104e89190611380565b610b80565b6040516104fa91906116ed565b60405180910390f35b600080823b905060008111915050919050565b34600460008282546105289190611906565b9250508190555034600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461057e9190611906565b9250508190555061058e33610bd6565b1561059d5761059c33610c4e565b5b3373ffffffffffffffffffffffffffffffffffffffff167f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d346040516105e391906117e5565b60405180910390a2565b60036020528060005260406000206000915090505481565b60016020528060005260406000206000915054906101000a900460ff1681565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61068d3373ffffffffffffffffffffffffffffffffffffffff16610503565b156106cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c49061178a565b60405180910390fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541161074f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107469061172a565b60405180910390fd5b610757610d9d565b565b6000600454905090565b6107823373ffffffffffffffffffffffffffffffffffffffff16610503565b156107c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b99061178a565b60405180910390fd5b6107ca610516565b565b60606000808054905067ffffffffffffffff8111156107ee576107ed611b9e565b5b60405190808252806020026020018201604052801561082157816020015b606081526020019060019003908161080c5790505b50905060005b60008054905081101561096a576007600080838154811061084b5761084a611b6f565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080546108bb90611a36565b80601f01602080910402602001604051908101604052809291908181526020018280546108e790611a36565b80156109345780601f1061090957610100808354040283529160200191610934565b820191906000526020600020905b81548152906001019060200180831161091757829003601f168201915b505050505082828151811061094c5761094b611b6f565b5b6020026020010181905250808061096290611a99565b915050610827565b508091505090565b6007602052806000526040600020600091509050805461099190611a36565b80601f01602080910402602001604051908101604052809291908181526020018280546109bd90611a36565b8015610a0a5780601f106109df57610100808354040283529160200191610a0a565b820191906000526020600020905b8154815290600101906020018083116109ed57829003601f168201915b505050505081565b6000600554905090565b670de0b6b3a764000081565b60026020528060005260406000206000915090505481565b60065481565b60055481565b60606000805480602002602001604051908101604052809291908181526020018280548015610ad057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610a86575b5050505050905090565b80600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209080519060200190610b2d929190611243565b5050565b60045481565b6000600654905090565b60008181548110610b5157600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000610be182610eef565b158015610c475750670de0b6b3a76400006fffffffffffffffffffffffffffffffff16600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b9050919050565b60065460008054905010610c97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8e9061174a565b60405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600080549050600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508060046000828254610e38919061195c565b92505081905550610e4833610eef565b15610e5757610e5633610f45565b5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610e9d573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f0f5bb82176feb1b5e747e28471aa92156a04d9f3ab9f45f28e2d704232b93f7582604051610ee491906117e5565b60405180910390a250565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60055460008054905011610f8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f85906117aa565b60405180910390fd5b600080549050600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410611014576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100b9061176a565b60405180910390fd5b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600160008054905061106c919061195c565b905080821461115a57600080828154811061108a57611089611b6f565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905080600084815481106110cc576110cb611b6f565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080548061120957611208611b40565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055505050565b82805461124f90611a36565b90600052602060002090601f01602090048101928261127157600085556112b8565b82601f1061128a57805160ff19168380011785556112b8565b828001600101855582156112b8579182015b828111156112b757825182559160200191906001019061129c565b5b5090506112c591906112c9565b5090565b5b808211156112e25760008160009055506001016112ca565b5090565b60006112f96112f484611825565b611800565b90508281526020810184848401111561131557611314611bd2565b5b6113208482856119f4565b509392505050565b60008135905061133781611d0b565b92915050565b600082601f83011261135257611351611bcd565b5b81356113628482602086016112e6565b91505092915050565b60008135905061137a81611d22565b92915050565b60006020828403121561139657611395611bdc565b5b60006113a484828501611328565b91505092915050565b6000602082840312156113c3576113c2611bdc565b5b600082013567ffffffffffffffff8111156113e1576113e0611bd7565b5b6113ed8482850161133d565b91505092915050565b60006020828403121561140c5761140b611bdc565b5b600061141a8482850161136b565b91505092915050565b600061142f838361144f565b60208301905092915050565b6000611447838361154f565b905092915050565b61145881611990565b82525050565b61146781611990565b82525050565b600061147882611876565b61148281856118b1565b935061148d83611856565b8060005b838110156114be5781516114a58882611423565b97506114b083611897565b925050600181019050611491565b5085935050505092915050565b60006114d682611881565b6114e081856118c2565b9350836020820285016114f285611866565b8060005b8581101561152e578484038952815161150f858261143b565b945061151a836118a4565b925060208a019950506001810190506114f6565b50829750879550505050505092915050565b611549816119a2565b82525050565b600061155a8261188c565b61156481856118d3565b9350611574818560208601611a03565b61157d81611be1565b840191505092915050565b60006115938261188c565b61159d81856118e4565b93506115ad818560208601611a03565b6115b681611be1565b840191505092915050565b60006115ce601d836118f5565b91506115d982611bf2565b602082019050919050565b60006115f16027836118f5565b91506115fc82611c1b565b604082019050919050565b60006116146012836118f5565b915061161f82611c6a565b602082019050919050565b6000611637601a836118f5565b915061164282611c93565b602082019050919050565b600061165a6040836118f5565b915061166582611cbc565b604082019050919050565b611679816119ae565b82525050565b611688816119ea565b82525050565b60006020820190506116a3600083018461145e565b92915050565b600060208201905081810360008301526116c3818461146d565b905092915050565b600060208201905081810360008301526116e581846114cb565b905092915050565b60006020820190506117026000830184611540565b92915050565b600060208201905081810360008301526117228184611588565b905092915050565b60006020820190508181036000830152611743816115c1565b9050919050565b60006020820190508181036000830152611763816115e4565b9050919050565b6000602082019050818103600083015261178381611607565b9050919050565b600060208201905081810360008301526117a38161162a565b9050919050565b600060208201905081810360008301526117c38161164d565b9050919050565b60006020820190506117df6000830184611670565b92915050565b60006020820190506117fa600083018461167f565b92915050565b600061180a61181b565b90506118168282611a68565b919050565b6000604051905090565b600067ffffffffffffffff8211156118405761183f611b9e565b5b61184982611be1565b9050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611911826119ea565b915061191c836119ea565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561195157611950611ae2565b5b828201905092915050565b6000611967826119ea565b9150611972836119ea565b92508282101561198557611984611ae2565b5b828203905092915050565b600061199b826119ca565b9050919050565b60008115159050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611a21578082015181840152602081019050611a06565b83811115611a30576000848401525b50505050565b60006002820490506001821680611a4e57607f821691505b60208210811415611a6257611a61611b11565b5b50919050565b611a7182611be1565b810181811067ffffffffffffffff82111715611a9057611a8f611b9e565b5b80604052505050565b6000611aa4826119ea565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611ad757611ad6611ae2565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f6e6c79207374616b65722063616e2063616c6c2066756e6374696f6e000000600082015250565b7f56616c696461746f72207365742068617320726561636865642066756c6c206360008201527f6170616369747900000000000000000000000000000000000000000000000000602082015250565b7f696e646578206f7574206f662072616e67650000000000000000000000000000600082015250565b7f4f6e6c7920454f412063616e2063616c6c2066756e6374696f6e000000000000600082015250565b7f56616c696461746f72732063616e2774206265206c657373207468616e20746860008201527f65206d696e696d756d2072657175697265642076616c696461746f72206e756d602082015250565b611d1481611990565b8114611d1f57600080fd5b50565b611d2b816119ea565b8114611d3657600080fd5b5056fea26469706673582212201556e5927c99f1e21e8ae2bbc55b0b507bc60d9732fc9a5e25a0708b409c8c8064736f6c63430008070033",
                "storage": {
                    "0x0000000000000000000000000000000000000000000000000000000000000000": "0x0000000000000000000000000000000000000000000000000000000000000006",
                    "0x0000000000000000000000000000000000000000000000000000000000000004": "0x00000000000000000000000000000000000000000000000340aad21b3b700000",
                    "0x0000000000000000000000000000000000000000000000000000000000000005": "0x0000000000000000000000000000000000000000000000000000000000000004",
                    "0x0000000000000000000000000000000000000000000000000000000000000006": "0x00000000000000000000000000000000000000000000000000000000000003e8",
                    "0x1dcda5f268991d7c1d8b502727aa77e4bf4bce9cab5706e1d77283c41b68caa6": "0x0000000000000000000000000000000000000000000000008ac7230489e80000",
                    "0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563": "0x000000000000000000000000394089c9a3fd81ca5e0a9dbc9d1020dfb99c2605",
                    "0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e564": "0x0000000000000000000000003fac5a12314fdc0935586fbdb47aed57abb1dbb2",
                    "0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e565": "0x000000000000000000000000f4daeb189bbe02920523d15da9a34d104afe858d",
                    "0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e566": "0x000000000000000000000000040cda93502d34517781dad158159639e6cd4c9a",
                    "0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e567": "0x000000000000000000000000a7f680dc3f37267f49218f0a4cbad9af0ccec6c2",
                    "0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e568": "0x00000000000000000000000098aea18c1e71fa3b63ff22dbdccba0a5c424ac9e",
                    "0x29baf1cf2aec7dc65bf8c257287be6b7bc5446654727389a104d27149d22de35": "0x0000000000000000000000000000000000000000000000000000000000000001",
                    "0x347b63766697af2cc3f7fea3345a6e70db02ddd42dd2c229d0d7158e295fd806": "0x0000000000000000000000000000000000000000000000008ac7230489e80000",
                    "0x34a2da5dde116a6fcb9f6de39912546cbb30bd83feb35de655ebb306db56592e": "0x0000000000000000000000000000000000000000000000008ac7230489e80000",
                    "0x74746fd2d6338f93fe81f956cf983e2e34ef18bcb188876f18656abd198f1af6": "0x0000000000000000000000000000000000000000000000000000000000000001",
                    "0x7ca2ba05f0587e63d3099b7830379fe7c9d07f725a9020e9f9122dfad53c01a8": "0x0000000000000000000000000000000000000000000000000000000000000005",
                    "0x9a2d8a19ac5c9b43607a6a4644f0c78d1b5c50c8c3fcad903b88c648cb679cba": "0x0000000000000000000000000000000000000000000000008ac7230489e80000",
                    "0x9e5c6f5d4b57d8033d2a935242f8e0f95b29a97a737edb53587f8b30bf84df1c": "0x0000000000000000000000000000000000000000000000008ac7230489e80000",
                    "0x9e6373873cfff38948337c2ddb35283bf111b030af69ff388a481c8f6f584e52": "0x0000000000000000000000000000000000000000000000000000000000000003",
                    "0xb1b6dce635e1e8204eae2d187d288b9851da788770e8054b0c495a382d88fa57": "0x0000000000000000000000000000000000000000000000000000000000000001",
                    "0xb85f62c81f1b02227cf51e3ee4d10343719fc49684d1498830adf4970400d4a2": "0x0000000000000000000000000000000000000000000000000000000000000002",
                    "0xc472280f73bd847fdb188f92b126c8108799cc063186df3c2a89c825de1e9c5d": "0x0000000000000000000000000000000000000000000000008ac7230489e80000",
                    "0xc81eed438ba58a639535d21dae766ff8fee126d46e771e9a87cfceb9b4d3457b": "0x0000000000000000000000000000000000000000000000000000000000000001",
                    "0xcc743313eb12e5e42d13f7993306f74a2a26512e62414962ff3e12736b7d2c36": "0x0000000000000000000000000000000000000000000000000000000000000001",
                    "0xcd18bcc0a1d592d09c0db904f38e4ad4d911acccf69d9e71cb4fbe6399c13f40": "0x0000000000000000000000000000000000000000000000000000000000000000",
                    "0xcf2f2a26e96eea28f4fd8e679c9f6aef29fa4c8abf751a97c48b8631d7176172": "0x0000000000000000000000000000000000000000000000000000000000000004",
                    "0xed9395a0fedec3502af9cc12a04a3754d4757769743e25fd8a1505990c55172b": "0x0000000000000000000000000000000000000000000000000000000000000001",
                    "0xfb784f03f82011965b9a4f0039ea8fa8a4eedb7808d26d5589304a104e14cde4": "0x0000000000000000000000000000000000000000000000000000000000000001"
                },
                "balance": "0x340aad21b3b700000"
            },
            "0x7E1C53F9e28e6992BB30A285f13dAB8547A8D545": {
                "balance": "0x3abad5b65ad5e7a7000000"
            }
        },
        "number": "0x0",
        "gasUsed": "0x70000",
        "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "baseFee": "0x0",
        "baseFeeEM": "0x0"
    },
    "params": {
        "forks": {
            "EIP150": {
                "block": 0
            },
            "EIP155": {
                "block": 0
            },
            "EIP158": {
                "block": 0
            },
             "EIP2929": {
                "block": 6334150
            },
            "byzantium": {
                "block": 0
            },
            "constantinople": {
                "block": 0
            },
            "homestead": {
                "block": 0
            },
            "istanbul": {
                "block": 0
            },
            "petersburg": {
                "block": 0
            },
            "quorumcalcalignment": {
                "block": 0
            },
            "txHashWithType": {
                "block": 0
            },
            "londonv2":{
                "block": 6334149
            }
        },
        "chainID": 9996,
        "engine": {
            "ibft": {
                "blockTime": 3000000000,
                "epochSize": 200,
                "type": "PoS",
                "validator_type": "ecdsa"
            }
        },
        "blockGasTarget": 0,
        "burnContract": null,
        "burnContractDestinationAddress": "0x0000000000000000000000000000000000000000"
    },
    "bootnodes": [
        "/ip4/45.76.129.38/tcp/10001/p2p/16Uiu2HAkwD1SjmUwx1qrjRVw99zuQE9hRf7Vsmp1pMpiFZ4t144H",
        "/ip4/104.238.173.226/tcp/10001/p2p/16Uiu2HAmC3j4SCSGHfYXqmn6AUtKNHCnwuwBvxbq555gKRH5XsFU",
        "/ip4/216.155.135.137/tcp/10001/p2p/16Uiu2HAmN282voTxQjaw1jEGWyH5f6sctCZRCtQjPkesrtJKeqeH",
        "/ip4/66.135.24.113/tcp/10001/p2p/16Uiu2HAm4U75Qru871t4GB1dsm4ZLb5Y7CQAELYLigZJP2TmR9oN",
        "/ip4/107.191.42.220/tcp/10001/p2p/16Uiu2HAmSgT3kgpYWmtfB3NphVVCQtYikFpccKCK6ZipKmdV55tr",
        "/ip4/144.202.13.7/tcp/10001/p2p/16Uiu2HAm4ujNpKKcERwzPsiHyJFTzW3vSbGSiEN3cqD3YbkKh9DQ"
    ]
}

  // Write genesis JSON to file
  fs.writeFileSync('genesis.json', JSON.stringify(genesis, null, 2))

  console.log('genesis.json file generated successfully.')
}

module.exports = generateGenesisJson
