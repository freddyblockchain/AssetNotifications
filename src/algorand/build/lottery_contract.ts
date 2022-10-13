export const lottery_contract = {
    "name": "my-first-router",
    "methods": [
        {
            "name": "resetLottery",
            "args": [],
            "returns": {
                "type": "string"
            },
            "desc": "Use this method for when the winner does not claim his/her reward, and the lottery is blocked."
        },
        {
            "name": "claimWin",
            "args": [],
            "returns": {
                "type": "string"
            }
        },
        {
            "name": "resolveLottery",
            "args": [
                {
                    "type": "application",
                    "name": "random_contract_call"
                }
            ],
            "returns": {
                "type": "byte[]"
            }
        },
        {
            "name": "participate",
            "args": [],
            "returns": {
                "type": "uint64"
            }
        },
        {
            "name": "startLottery",
            "args": [],
            "returns": {
                "type": "void"
            }
        }
    ],
    "networks": {}
}