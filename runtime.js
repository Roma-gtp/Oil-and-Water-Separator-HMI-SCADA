const graph={
  "spec": {
    "inputs": [
      "Start",
      "Stop",
      "Low20",
      "High80",
      "HighHi90",
      "Auto",
      "LowLo10",
      "Reset",
      "OilPhase",
      "TempOK",
      "EStopOK",
      "ManFeed",
      "ManOil",
      "ManWater"
    ],
    "outputs": [
      "FeedPump",
      "AlarmLamp",
      "PumpCmdLamp",
      "LowWarning",
      "OilValve",
      "WaterValve",
      "Heater",
      "BatchDone"
    ],
    "relays": [
      "F0",
      "S0",
      "D0",
      "StartEdge",
      "ResetEdge",
      "ModeStable",
      "BadLevel",
      "Trip",
      "Alarm",
      "Run",
      "Fill",
      "Settle",
      "Drain",
      "Safe",
      "PrevStart",
      "PrevReset",
      "PrevAuto"
    ],
    "timers": [
      [
        "Settle30",
        300
      ],
      [
        "Fill120",
        1200
      ],
      [
        "Drain120",
        1200
      ]
    ],
    "rungs": [
      [
        "F0",
        "Fill"
      ],
      [
        "S0",
        "Settle"
      ],
      [
        "D0",
        "Drain"
      ],
      [
        "Settle30",
        "S0"
      ],
      [
        "Fill120",
        "F0"
      ],
      [
        "Drain120",
        "D0"
      ],
      [
        "StartEdge",
        "Start*/PrevStart*/1st.Scan"
      ],
      [
        "ResetEdge",
        "Reset*/PrevReset*/1st.Scan"
      ],
      [
        "ModeStable",
        "(Auto*PrevAuto+/Auto*/PrevAuto)*/1st.Scan"
      ],
      [
        "BadLevel",
        "HighHi90*/High80+High80*Low20+LowLo10*/Low20"
      ],
      [
        "Trip",
        "HighHi90+/EStopOK+/TempOK+BadLevel+Fill120+Drain120"
      ],
      [
        "Alarm",
        "Trip+Alarm*/ResetEdge"
      ],
      [
        "Run",
        "(Run+StartEdge)*ModeStable*/Stop*/Alarm*EStopOK*/1st.Scan"
      ],
      [
        "Fill",
        "Run*Auto*/High80*(F0+Low20*/S0*/D0)"
      ],
      [
        "Settle",
        "Run*Auto*/Settle30*(S0+F0*High80)"
      ],
      [
        "Drain",
        "Run*Auto*/Low20*(D0+S0*Settle30)"
      ],
      [
        "Safe",
        "Run*/Stop*/Alarm*EStopOK*TempOK*/HighHi90"
      ],
      [
        "FeedPump",
        "Safe*/High80*(Auto*Fill+/Auto*ManFeed*/ManOil*/ManWater)"
      ],
      [
        "OilValve",
        "Safe*/Low20*(Auto*Drain*OilPhase+/Auto*ManOil*/ManWater*/ManFeed)"
      ],
      [
        "WaterValve",
        "Safe*/Low20*(Auto*Drain*/OilPhase+/Auto*ManWater*/ManOil*/ManFeed)"
      ],
      [
        "Heater",
        "Safe*Auto*Settle*/Low20"
      ],
      [
        "AlarmLamp",
        "Alarm"
      ],
      [
        "PumpCmdLamp",
        "FeedPump"
      ],
      [
        "LowWarning",
        "LowLo10"
      ],
      [
        "BatchDone",
        "D0*Low20*Run*Auto"
      ],
      [
        "PrevStart",
        "Start"
      ],
      [
        "PrevReset",
        "Reset"
      ],
      [
        "PrevAuto",
        "Auto"
      ]
    ]
  },
  "networks": [
    {
      "index": 1,
      "tag": "F0",
      "equation": "Fill",
      "nodes": [
        {
          "id": 1,
          "kind": "input",
          "expr": "Fill",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 1,
          "inputs": []
        },
        {
          "id": 2,
          "kind": "output",
          "expr": "F0",
          "x": 265,
          "y": 32.0,
          "w": 170,
          "h": 40,
          "order": 2,
          "inputs": [
            {
              "name": "IN",
              "src": 1,
              "y": 20
            }
          ]
        }
      ],
      "width": 470,
      "height": 107.0
    },
    {
      "index": 2,
      "tag": "S0",
      "equation": "Settle",
      "nodes": [
        {
          "id": 4,
          "kind": "input",
          "expr": "Settle",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 3,
          "inputs": []
        },
        {
          "id": 5,
          "kind": "output",
          "expr": "S0",
          "x": 265,
          "y": 32.0,
          "w": 170,
          "h": 40,
          "order": 4,
          "inputs": [
            {
              "name": "IN",
              "src": 4,
              "y": 20
            }
          ]
        }
      ],
      "width": 470,
      "height": 107.0
    },
    {
      "index": 3,
      "tag": "D0",
      "equation": "Drain",
      "nodes": [
        {
          "id": 7,
          "kind": "input",
          "expr": "Drain",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 5,
          "inputs": []
        },
        {
          "id": 8,
          "kind": "output",
          "expr": "D0",
          "x": 265,
          "y": 32.0,
          "w": 170,
          "h": 40,
          "order": 6,
          "inputs": [
            {
              "name": "IN",
              "src": 7,
              "y": 20
            }
          ]
        }
      ],
      "width": 470,
      "height": 107.0
    },
    {
      "index": 4,
      "tag": "Settle30",
      "equation": "S0",
      "nodes": [
        {
          "id": 10,
          "kind": "input",
          "expr": "S0",
          "x": 20,
          "y": 40,
          "w": 155,
          "h": 34,
          "order": 7,
          "inputs": []
        },
        {
          "id": 11,
          "kind": "input",
          "expr": "T#30s",
          "x": 20,
          "y": 120,
          "w": 155,
          "h": 34,
          "order": 8,
          "inputs": []
        },
        {
          "id": 12,
          "kind": "block",
          "type": "TON",
          "instance": "SettleTimer",
          "output": "Q",
          "preset": 30,
          "x": 260,
          "y": 50,
          "w": 160,
          "h": 100,
          "order": 9,
          "inputs": [
            {
              "name": "IN",
              "src": 10,
              "y": 35
            },
            {
              "name": "PT",
              "src": 11,
              "y": 75
            }
          ]
        },
        {
          "id": 13,
          "kind": "output",
          "expr": "Settle30",
          "x": 480,
          "y": 80.0,
          "w": 170,
          "h": 40,
          "order": 10,
          "inputs": [
            {
              "name": "IN",
              "src": 12,
              "y": 20
            }
          ]
        }
      ],
      "width": 685,
      "height": 189
    },
    {
      "index": 5,
      "tag": "Fill120",
      "equation": "F0",
      "nodes": [
        {
          "id": 15,
          "kind": "input",
          "expr": "F0",
          "x": 20,
          "y": 40,
          "w": 155,
          "h": 34,
          "order": 11,
          "inputs": []
        },
        {
          "id": 16,
          "kind": "input",
          "expr": "T#120s",
          "x": 20,
          "y": 120,
          "w": 155,
          "h": 34,
          "order": 12,
          "inputs": []
        },
        {
          "id": 17,
          "kind": "block",
          "type": "TON",
          "instance": "FillTimer",
          "output": "Q",
          "preset": 120,
          "x": 260,
          "y": 50,
          "w": 160,
          "h": 100,
          "order": 13,
          "inputs": [
            {
              "name": "IN",
              "src": 15,
              "y": 35
            },
            {
              "name": "PT",
              "src": 16,
              "y": 75
            }
          ]
        },
        {
          "id": 18,
          "kind": "output",
          "expr": "Fill120",
          "x": 480,
          "y": 80.0,
          "w": 170,
          "h": 40,
          "order": 14,
          "inputs": [
            {
              "name": "IN",
              "src": 17,
              "y": 20
            }
          ]
        }
      ],
      "width": 685,
      "height": 189
    },
    {
      "index": 6,
      "tag": "Drain120",
      "equation": "D0",
      "nodes": [
        {
          "id": 20,
          "kind": "input",
          "expr": "D0",
          "x": 20,
          "y": 40,
          "w": 155,
          "h": 34,
          "order": 15,
          "inputs": []
        },
        {
          "id": 21,
          "kind": "input",
          "expr": "T#120s",
          "x": 20,
          "y": 120,
          "w": 155,
          "h": 34,
          "order": 16,
          "inputs": []
        },
        {
          "id": 22,
          "kind": "block",
          "type": "TON",
          "instance": "DrainTimer",
          "output": "Q",
          "preset": 120,
          "x": 260,
          "y": 50,
          "w": 160,
          "h": 100,
          "order": 17,
          "inputs": [
            {
              "name": "IN",
              "src": 20,
              "y": 35
            },
            {
              "name": "PT",
              "src": 21,
              "y": 75
            }
          ]
        },
        {
          "id": 23,
          "kind": "output",
          "expr": "Drain120",
          "x": 480,
          "y": 80.0,
          "w": 170,
          "h": 40,
          "order": 18,
          "inputs": [
            {
              "name": "IN",
              "src": 22,
              "y": 20
            }
          ]
        }
      ],
      "width": 685,
      "height": 189
    },
    {
      "index": 7,
      "tag": "StartEdge",
      "equation": "Start*/PrevStart*/FirstScan",
      "nodes": [
        {
          "id": 25,
          "kind": "input",
          "expr": "Start",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 19,
          "inputs": []
        },
        {
          "id": 26,
          "kind": "input",
          "expr": "PrevStart",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 20,
          "inputs": []
        },
        {
          "id": 27,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 102.0,
          "w": 115,
          "h": 60,
          "order": 21,
          "inputs": [
            {
              "name": "IN",
              "src": 26,
              "y": 28
            }
          ]
        },
        {
          "id": 28,
          "kind": "input",
          "expr": "FirstScan",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 22,
          "inputs": []
        },
        {
          "id": 29,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 182.0,
          "w": 115,
          "h": 60,
          "order": 23,
          "inputs": [
            {
              "name": "IN",
              "src": 28,
              "y": 28
            }
          ]
        },
        {
          "id": 30,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 87.0,
          "w": 115,
          "h": 90,
          "order": 24,
          "inputs": [
            {
              "name": "IN1",
              "src": 25,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 27,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 29,
              "y": 72
            }
          ]
        },
        {
          "id": 31,
          "kind": "output",
          "expr": "StartEdge",
          "x": 695,
          "y": 112.0,
          "w": 170,
          "h": 40,
          "order": 25,
          "inputs": [
            {
              "name": "IN",
              "src": 30,
              "y": 20
            }
          ]
        }
      ],
      "width": 900,
      "height": 277.0
    },
    {
      "index": 8,
      "tag": "ResetEdge",
      "equation": "Reset*/PrevReset*/FirstScan",
      "nodes": [
        {
          "id": 33,
          "kind": "input",
          "expr": "Reset",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 26,
          "inputs": []
        },
        {
          "id": 34,
          "kind": "input",
          "expr": "PrevReset",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 27,
          "inputs": []
        },
        {
          "id": 35,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 102.0,
          "w": 115,
          "h": 60,
          "order": 28,
          "inputs": [
            {
              "name": "IN",
              "src": 34,
              "y": 28
            }
          ]
        },
        {
          "id": 36,
          "kind": "input",
          "expr": "FirstScan",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 29,
          "inputs": []
        },
        {
          "id": 37,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 182.0,
          "w": 115,
          "h": 60,
          "order": 30,
          "inputs": [
            {
              "name": "IN",
              "src": 36,
              "y": 28
            }
          ]
        },
        {
          "id": 38,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 87.0,
          "w": 115,
          "h": 90,
          "order": 31,
          "inputs": [
            {
              "name": "IN1",
              "src": 33,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 35,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 37,
              "y": 72
            }
          ]
        },
        {
          "id": 39,
          "kind": "output",
          "expr": "ResetEdge",
          "x": 695,
          "y": 112.0,
          "w": 170,
          "h": 40,
          "order": 32,
          "inputs": [
            {
              "name": "IN",
              "src": 38,
              "y": 20
            }
          ]
        }
      ],
      "width": 900,
      "height": 277.0
    },
    {
      "index": 9,
      "tag": "ModeStable",
      "equation": "(Auto*PrevAuto+/Auto*/PrevAuto)*/FirstScan",
      "nodes": [
        {
          "id": 41,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 33,
          "inputs": []
        },
        {
          "id": 42,
          "kind": "input",
          "expr": "PrevAuto",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 34,
          "inputs": []
        },
        {
          "id": 43,
          "kind": "block",
          "type": "AND",
          "x": 235,
          "y": 58.0,
          "w": 115,
          "h": 68,
          "order": 35,
          "inputs": [
            {
              "name": "IN1",
              "src": 41,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 42,
              "y": 50
            }
          ]
        },
        {
          "id": 44,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 36,
          "inputs": []
        },
        {
          "id": 45,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 182.0,
          "w": 115,
          "h": 60,
          "order": 37,
          "inputs": [
            {
              "name": "IN",
              "src": 44,
              "y": 28
            }
          ]
        },
        {
          "id": 46,
          "kind": "input",
          "expr": "PrevAuto",
          "x": 20,
          "y": 275,
          "w": 155,
          "h": 34,
          "order": 38,
          "inputs": []
        },
        {
          "id": 47,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 262.0,
          "w": 115,
          "h": 60,
          "order": 39,
          "inputs": [
            {
              "name": "IN",
              "src": 46,
              "y": 28
            }
          ]
        },
        {
          "id": 48,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 218.0,
          "w": 115,
          "h": 68,
          "order": 40,
          "inputs": [
            {
              "name": "IN1",
              "src": 45,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 47,
              "y": 50
            }
          ]
        },
        {
          "id": 49,
          "kind": "block",
          "type": "OR",
          "x": 665,
          "y": 138.0,
          "w": 115,
          "h": 68,
          "order": 41,
          "inputs": [
            {
              "name": "IN1",
              "src": 43,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 48,
              "y": 50
            }
          ]
        },
        {
          "id": 50,
          "kind": "input",
          "expr": "FirstScan",
          "x": 20,
          "y": 355,
          "w": 155,
          "h": 34,
          "order": 42,
          "inputs": []
        },
        {
          "id": 51,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 342.0,
          "w": 115,
          "h": 60,
          "order": 43,
          "inputs": [
            {
              "name": "IN",
              "src": 50,
              "y": 28
            }
          ]
        },
        {
          "id": 52,
          "kind": "block",
          "type": "AND",
          "x": 880,
          "y": 238.0,
          "w": 115,
          "h": 68,
          "order": 44,
          "inputs": [
            {
              "name": "IN1",
              "src": 49,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 51,
              "y": 50
            }
          ]
        },
        {
          "id": 53,
          "kind": "output",
          "expr": "ModeStable",
          "x": 1125,
          "y": 252.0,
          "w": 170,
          "h": 40,
          "order": 45,
          "inputs": [
            {
              "name": "IN",
              "src": 52,
              "y": 20
            }
          ]
        }
      ],
      "width": 1330,
      "height": 437.0
    },
    {
      "index": 10,
      "tag": "BadLevel",
      "equation": "HighHi90*/High80+High80*Low20+LowLo10*/Low20",
      "nodes": [
        {
          "id": 55,
          "kind": "input",
          "expr": "HighHi90",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 46,
          "inputs": []
        },
        {
          "id": 56,
          "kind": "input",
          "expr": "High80",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 47,
          "inputs": []
        },
        {
          "id": 57,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 102.0,
          "w": 115,
          "h": 60,
          "order": 48,
          "inputs": [
            {
              "name": "IN",
              "src": 56,
              "y": 28
            }
          ]
        },
        {
          "id": 58,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 58.0,
          "w": 115,
          "h": 68,
          "order": 49,
          "inputs": [
            {
              "name": "IN1",
              "src": 55,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 57,
              "y": 50
            }
          ]
        },
        {
          "id": 59,
          "kind": "input",
          "expr": "High80",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 50,
          "inputs": []
        },
        {
          "id": 60,
          "kind": "input",
          "expr": "Low20",
          "x": 20,
          "y": 275,
          "w": 155,
          "h": 34,
          "order": 51,
          "inputs": []
        },
        {
          "id": 61,
          "kind": "block",
          "type": "AND",
          "x": 235,
          "y": 218.0,
          "w": 115,
          "h": 68,
          "order": 52,
          "inputs": [
            {
              "name": "IN1",
              "src": 59,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 60,
              "y": 50
            }
          ]
        },
        {
          "id": 62,
          "kind": "input",
          "expr": "LowLo10",
          "x": 20,
          "y": 355,
          "w": 155,
          "h": 34,
          "order": 53,
          "inputs": []
        },
        {
          "id": 63,
          "kind": "input",
          "expr": "Low20",
          "x": 20,
          "y": 435,
          "w": 155,
          "h": 34,
          "order": 54,
          "inputs": []
        },
        {
          "id": 64,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 422.0,
          "w": 115,
          "h": 60,
          "order": 55,
          "inputs": [
            {
              "name": "IN",
              "src": 63,
              "y": 28
            }
          ]
        },
        {
          "id": 65,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 378.0,
          "w": 115,
          "h": 68,
          "order": 56,
          "inputs": [
            {
              "name": "IN1",
              "src": 62,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 64,
              "y": 50
            }
          ]
        },
        {
          "id": 66,
          "kind": "block",
          "type": "OR",
          "x": 665,
          "y": 207.0,
          "w": 115,
          "h": 90,
          "order": 57,
          "inputs": [
            {
              "name": "IN1",
              "src": 58,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 61,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 65,
              "y": 72
            }
          ]
        },
        {
          "id": 67,
          "kind": "output",
          "expr": "BadLevel",
          "x": 910,
          "y": 232.0,
          "w": 170,
          "h": 40,
          "order": 58,
          "inputs": [
            {
              "name": "IN",
              "src": 66,
              "y": 20
            }
          ]
        }
      ],
      "width": 1115,
      "height": 517.0
    },
    {
      "index": 11,
      "tag": "Trip",
      "equation": "HighHi90+/EStopOK+/TempOK+BadLevel+Fill120+Drain120",
      "nodes": [
        {
          "id": 69,
          "kind": "input",
          "expr": "HighHi90",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 59,
          "inputs": []
        },
        {
          "id": 70,
          "kind": "input",
          "expr": "EStopOK",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 60,
          "inputs": []
        },
        {
          "id": 71,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 102.0,
          "w": 115,
          "h": 60,
          "order": 61,
          "inputs": [
            {
              "name": "IN",
              "src": 70,
              "y": 28
            }
          ]
        },
        {
          "id": 72,
          "kind": "input",
          "expr": "TempOK",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 62,
          "inputs": []
        },
        {
          "id": 73,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 182.0,
          "w": 115,
          "h": 60,
          "order": 63,
          "inputs": [
            {
              "name": "IN",
              "src": 72,
              "y": 28
            }
          ]
        },
        {
          "id": 74,
          "kind": "input",
          "expr": "BadLevel",
          "x": 20,
          "y": 275,
          "w": 155,
          "h": 34,
          "order": 64,
          "inputs": []
        },
        {
          "id": 75,
          "kind": "input",
          "expr": "Fill120",
          "x": 20,
          "y": 355,
          "w": 155,
          "h": 34,
          "order": 65,
          "inputs": []
        },
        {
          "id": 76,
          "kind": "input",
          "expr": "Drain120",
          "x": 20,
          "y": 435,
          "w": 155,
          "h": 34,
          "order": 66,
          "inputs": []
        },
        {
          "id": 77,
          "kind": "block",
          "type": "OR",
          "x": 450,
          "y": 174.0,
          "w": 115,
          "h": 156,
          "order": 67,
          "inputs": [
            {
              "name": "IN1",
              "src": 69,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 71,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 73,
              "y": 72
            },
            {
              "name": "IN4",
              "src": 74,
              "y": 94
            },
            {
              "name": "IN5",
              "src": 75,
              "y": 116
            },
            {
              "name": "IN6",
              "src": 76,
              "y": 138
            }
          ]
        },
        {
          "id": 78,
          "kind": "output",
          "expr": "Trip",
          "x": 695,
          "y": 232.0,
          "w": 170,
          "h": 40,
          "order": 68,
          "inputs": [
            {
              "name": "IN",
              "src": 77,
              "y": 20
            }
          ]
        }
      ],
      "width": 900,
      "height": 504
    },
    {
      "index": 12,
      "tag": "Alarm",
      "equation": "Trip+Alarm*/ResetEdge",
      "nodes": [
        {
          "id": 80,
          "kind": "input",
          "expr": "Trip",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 69,
          "inputs": []
        },
        {
          "id": 81,
          "kind": "input",
          "expr": "Alarm",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 70,
          "inputs": []
        },
        {
          "id": 82,
          "kind": "input",
          "expr": "ResetEdge",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 71,
          "inputs": []
        },
        {
          "id": 83,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 182.0,
          "w": 115,
          "h": 60,
          "order": 72,
          "inputs": [
            {
              "name": "IN",
              "src": 82,
              "y": 28
            }
          ]
        },
        {
          "id": 84,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 138.0,
          "w": 115,
          "h": 68,
          "order": 73,
          "inputs": [
            {
              "name": "IN1",
              "src": 81,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 83,
              "y": 50
            }
          ]
        },
        {
          "id": 85,
          "kind": "block",
          "type": "OR",
          "x": 665,
          "y": 78.0,
          "w": 115,
          "h": 68,
          "order": 74,
          "inputs": [
            {
              "name": "IN1",
              "src": 80,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 84,
              "y": 50
            }
          ]
        },
        {
          "id": 86,
          "kind": "output",
          "expr": "Alarm",
          "x": 910,
          "y": 92.0,
          "w": 170,
          "h": 40,
          "order": 75,
          "inputs": [
            {
              "name": "IN",
              "src": 85,
              "y": 20
            }
          ]
        }
      ],
      "width": 1115,
      "height": 277.0
    },
    {
      "index": 13,
      "tag": "Run",
      "equation": "(Run+StartEdge)*ModeStable*/Stop*/Alarm*EStopOK*/FirstScan",
      "nodes": [
        {
          "id": 88,
          "kind": "input",
          "expr": "Run",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 76,
          "inputs": []
        },
        {
          "id": 89,
          "kind": "input",
          "expr": "StartEdge",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 77,
          "inputs": []
        },
        {
          "id": 90,
          "kind": "block",
          "type": "OR",
          "x": 235,
          "y": 58.0,
          "w": 115,
          "h": 68,
          "order": 78,
          "inputs": [
            {
              "name": "IN1",
              "src": 88,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 89,
              "y": 50
            }
          ]
        },
        {
          "id": 91,
          "kind": "input",
          "expr": "ModeStable",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 79,
          "inputs": []
        },
        {
          "id": 92,
          "kind": "input",
          "expr": "Stop",
          "x": 20,
          "y": 275,
          "w": 155,
          "h": 34,
          "order": 80,
          "inputs": []
        },
        {
          "id": 93,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 262.0,
          "w": 115,
          "h": 60,
          "order": 81,
          "inputs": [
            {
              "name": "IN",
              "src": 92,
              "y": 28
            }
          ]
        },
        {
          "id": 94,
          "kind": "input",
          "expr": "Alarm",
          "x": 20,
          "y": 355,
          "w": 155,
          "h": 34,
          "order": 82,
          "inputs": []
        },
        {
          "id": 95,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 342.0,
          "w": 115,
          "h": 60,
          "order": 83,
          "inputs": [
            {
              "name": "IN",
              "src": 94,
              "y": 28
            }
          ]
        },
        {
          "id": 96,
          "kind": "input",
          "expr": "EStopOK",
          "x": 20,
          "y": 435,
          "w": 155,
          "h": 34,
          "order": 84,
          "inputs": []
        },
        {
          "id": 97,
          "kind": "input",
          "expr": "FirstScan",
          "x": 20,
          "y": 515,
          "w": 155,
          "h": 34,
          "order": 85,
          "inputs": []
        },
        {
          "id": 98,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 502.0,
          "w": 115,
          "h": 60,
          "order": 86,
          "inputs": [
            {
              "name": "IN",
              "src": 97,
              "y": 28
            }
          ]
        },
        {
          "id": 99,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 247.33333333333331,
          "w": 115,
          "h": 156,
          "order": 87,
          "inputs": [
            {
              "name": "IN1",
              "src": 90,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 91,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 93,
              "y": 72
            },
            {
              "name": "IN4",
              "src": 95,
              "y": 94
            },
            {
              "name": "IN5",
              "src": 96,
              "y": 116
            },
            {
              "name": "IN6",
              "src": 98,
              "y": 138
            }
          ]
        },
        {
          "id": 100,
          "kind": "output",
          "expr": "Run",
          "x": 695,
          "y": 305.3333333333333,
          "w": 170,
          "h": 40,
          "order": 88,
          "inputs": [
            {
              "name": "IN",
              "src": 99,
              "y": 20
            }
          ]
        }
      ],
      "width": 900,
      "height": 597.0
    },
    {
      "index": 14,
      "tag": "Fill",
      "equation": "Run*Auto*/High80*(F0+Low20*/S0*/D0)",
      "nodes": [
        {
          "id": 102,
          "kind": "input",
          "expr": "Run",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 89,
          "inputs": []
        },
        {
          "id": 103,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 90,
          "inputs": []
        },
        {
          "id": 104,
          "kind": "input",
          "expr": "High80",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 91,
          "inputs": []
        },
        {
          "id": 105,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 182.0,
          "w": 115,
          "h": 60,
          "order": 92,
          "inputs": [
            {
              "name": "IN",
              "src": 104,
              "y": 28
            }
          ]
        },
        {
          "id": 106,
          "kind": "input",
          "expr": "F0",
          "x": 20,
          "y": 275,
          "w": 155,
          "h": 34,
          "order": 93,
          "inputs": []
        },
        {
          "id": 107,
          "kind": "input",
          "expr": "Low20",
          "x": 20,
          "y": 355,
          "w": 155,
          "h": 34,
          "order": 94,
          "inputs": []
        },
        {
          "id": 108,
          "kind": "input",
          "expr": "S0",
          "x": 20,
          "y": 435,
          "w": 155,
          "h": 34,
          "order": 95,
          "inputs": []
        },
        {
          "id": 109,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 422.0,
          "w": 115,
          "h": 60,
          "order": 96,
          "inputs": [
            {
              "name": "IN",
              "src": 108,
              "y": 28
            }
          ]
        },
        {
          "id": 110,
          "kind": "input",
          "expr": "D0",
          "x": 20,
          "y": 515,
          "w": 155,
          "h": 34,
          "order": 97,
          "inputs": []
        },
        {
          "id": 111,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 502.0,
          "w": 115,
          "h": 60,
          "order": 98,
          "inputs": [
            {
              "name": "IN",
              "src": 110,
              "y": 28
            }
          ]
        },
        {
          "id": 112,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 407.0,
          "w": 115,
          "h": 90,
          "order": 99,
          "inputs": [
            {
              "name": "IN1",
              "src": 107,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 109,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 111,
              "y": 72
            }
          ]
        },
        {
          "id": 113,
          "kind": "block",
          "type": "OR",
          "x": 665,
          "y": 338.0,
          "w": 115,
          "h": 68,
          "order": 100,
          "inputs": [
            {
              "name": "IN1",
              "src": 106,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 112,
              "y": 50
            }
          ]
        },
        {
          "id": 114,
          "kind": "block",
          "type": "AND",
          "x": 880,
          "y": 136.0,
          "w": 115,
          "h": 112,
          "order": 101,
          "inputs": [
            {
              "name": "IN1",
              "src": 102,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 103,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 105,
              "y": 72
            },
            {
              "name": "IN4",
              "src": 113,
              "y": 94
            }
          ]
        },
        {
          "id": 115,
          "kind": "output",
          "expr": "Fill",
          "x": 1125,
          "y": 172.0,
          "w": 170,
          "h": 40,
          "order": 102,
          "inputs": [
            {
              "name": "IN",
              "src": 114,
              "y": 20
            }
          ]
        }
      ],
      "width": 1330,
      "height": 597.0
    },
    {
      "index": 15,
      "tag": "Settle",
      "equation": "Run*Auto*/Settle30*(S0+F0*High80)",
      "nodes": [
        {
          "id": 117,
          "kind": "input",
          "expr": "Run",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 103,
          "inputs": []
        },
        {
          "id": 118,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 104,
          "inputs": []
        },
        {
          "id": 119,
          "kind": "input",
          "expr": "Settle30",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 105,
          "inputs": []
        },
        {
          "id": 120,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 182.0,
          "w": 115,
          "h": 60,
          "order": 106,
          "inputs": [
            {
              "name": "IN",
              "src": 119,
              "y": 28
            }
          ]
        },
        {
          "id": 121,
          "kind": "input",
          "expr": "S0",
          "x": 20,
          "y": 275,
          "w": 155,
          "h": 34,
          "order": 107,
          "inputs": []
        },
        {
          "id": 122,
          "kind": "input",
          "expr": "F0",
          "x": 20,
          "y": 355,
          "w": 155,
          "h": 34,
          "order": 108,
          "inputs": []
        },
        {
          "id": 123,
          "kind": "input",
          "expr": "High80",
          "x": 20,
          "y": 435,
          "w": 155,
          "h": 34,
          "order": 109,
          "inputs": []
        },
        {
          "id": 124,
          "kind": "block",
          "type": "AND",
          "x": 235,
          "y": 378.0,
          "w": 115,
          "h": 68,
          "order": 110,
          "inputs": [
            {
              "name": "IN1",
              "src": 122,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 123,
              "y": 50
            }
          ]
        },
        {
          "id": 125,
          "kind": "block",
          "type": "OR",
          "x": 450,
          "y": 318.0,
          "w": 115,
          "h": 68,
          "order": 111,
          "inputs": [
            {
              "name": "IN1",
              "src": 121,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 124,
              "y": 50
            }
          ]
        },
        {
          "id": 126,
          "kind": "block",
          "type": "AND",
          "x": 665,
          "y": 131.0,
          "w": 115,
          "h": 112,
          "order": 112,
          "inputs": [
            {
              "name": "IN1",
              "src": 117,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 118,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 120,
              "y": 72
            },
            {
              "name": "IN4",
              "src": 125,
              "y": 94
            }
          ]
        },
        {
          "id": 127,
          "kind": "output",
          "expr": "Settle",
          "x": 910,
          "y": 167.0,
          "w": 170,
          "h": 40,
          "order": 113,
          "inputs": [
            {
              "name": "IN",
              "src": 126,
              "y": 20
            }
          ]
        }
      ],
      "width": 1115,
      "height": 504
    },
    {
      "index": 16,
      "tag": "Drain",
      "equation": "Run*Auto*/Low20*(D0+S0*Settle30)",
      "nodes": [
        {
          "id": 129,
          "kind": "input",
          "expr": "Run",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 114,
          "inputs": []
        },
        {
          "id": 130,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 115,
          "inputs": []
        },
        {
          "id": 131,
          "kind": "input",
          "expr": "Low20",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 116,
          "inputs": []
        },
        {
          "id": 132,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 182.0,
          "w": 115,
          "h": 60,
          "order": 117,
          "inputs": [
            {
              "name": "IN",
              "src": 131,
              "y": 28
            }
          ]
        },
        {
          "id": 133,
          "kind": "input",
          "expr": "D0",
          "x": 20,
          "y": 275,
          "w": 155,
          "h": 34,
          "order": 118,
          "inputs": []
        },
        {
          "id": 134,
          "kind": "input",
          "expr": "S0",
          "x": 20,
          "y": 355,
          "w": 155,
          "h": 34,
          "order": 119,
          "inputs": []
        },
        {
          "id": 135,
          "kind": "input",
          "expr": "Settle30",
          "x": 20,
          "y": 435,
          "w": 155,
          "h": 34,
          "order": 120,
          "inputs": []
        },
        {
          "id": 136,
          "kind": "block",
          "type": "AND",
          "x": 235,
          "y": 378.0,
          "w": 115,
          "h": 68,
          "order": 121,
          "inputs": [
            {
              "name": "IN1",
              "src": 134,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 135,
              "y": 50
            }
          ]
        },
        {
          "id": 137,
          "kind": "block",
          "type": "OR",
          "x": 450,
          "y": 318.0,
          "w": 115,
          "h": 68,
          "order": 122,
          "inputs": [
            {
              "name": "IN1",
              "src": 133,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 136,
              "y": 50
            }
          ]
        },
        {
          "id": 138,
          "kind": "block",
          "type": "AND",
          "x": 665,
          "y": 131.0,
          "w": 115,
          "h": 112,
          "order": 123,
          "inputs": [
            {
              "name": "IN1",
              "src": 129,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 130,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 132,
              "y": 72
            },
            {
              "name": "IN4",
              "src": 137,
              "y": 94
            }
          ]
        },
        {
          "id": 139,
          "kind": "output",
          "expr": "Drain",
          "x": 910,
          "y": 167.0,
          "w": 170,
          "h": 40,
          "order": 124,
          "inputs": [
            {
              "name": "IN",
              "src": 138,
              "y": 20
            }
          ]
        }
      ],
      "width": 1115,
      "height": 504
    },
    {
      "index": 17,
      "tag": "Safe",
      "equation": "Run*/Stop*/Alarm*EStopOK*TempOK*/HighHi90",
      "nodes": [
        {
          "id": 141,
          "kind": "input",
          "expr": "Run",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 125,
          "inputs": []
        },
        {
          "id": 142,
          "kind": "input",
          "expr": "Stop",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 126,
          "inputs": []
        },
        {
          "id": 143,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 102.0,
          "w": 115,
          "h": 60,
          "order": 127,
          "inputs": [
            {
              "name": "IN",
              "src": 142,
              "y": 28
            }
          ]
        },
        {
          "id": 144,
          "kind": "input",
          "expr": "Alarm",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 128,
          "inputs": []
        },
        {
          "id": 145,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 182.0,
          "w": 115,
          "h": 60,
          "order": 129,
          "inputs": [
            {
              "name": "IN",
              "src": 144,
              "y": 28
            }
          ]
        },
        {
          "id": 146,
          "kind": "input",
          "expr": "EStopOK",
          "x": 20,
          "y": 275,
          "w": 155,
          "h": 34,
          "order": 130,
          "inputs": []
        },
        {
          "id": 147,
          "kind": "input",
          "expr": "TempOK",
          "x": 20,
          "y": 355,
          "w": 155,
          "h": 34,
          "order": 131,
          "inputs": []
        },
        {
          "id": 148,
          "kind": "input",
          "expr": "HighHi90",
          "x": 20,
          "y": 435,
          "w": 155,
          "h": 34,
          "order": 132,
          "inputs": []
        },
        {
          "id": 149,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 422.0,
          "w": 115,
          "h": 60,
          "order": 133,
          "inputs": [
            {
              "name": "IN",
              "src": 148,
              "y": 28
            }
          ]
        },
        {
          "id": 150,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 174.0,
          "w": 115,
          "h": 156,
          "order": 134,
          "inputs": [
            {
              "name": "IN1",
              "src": 141,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 143,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 145,
              "y": 72
            },
            {
              "name": "IN4",
              "src": 146,
              "y": 94
            },
            {
              "name": "IN5",
              "src": 147,
              "y": 116
            },
            {
              "name": "IN6",
              "src": 149,
              "y": 138
            }
          ]
        },
        {
          "id": 151,
          "kind": "output",
          "expr": "Safe",
          "x": 695,
          "y": 232.0,
          "w": 170,
          "h": 40,
          "order": 135,
          "inputs": [
            {
              "name": "IN",
              "src": 150,
              "y": 20
            }
          ]
        }
      ],
      "width": 900,
      "height": 517.0
    },
    {
      "index": 18,
      "tag": "FeedPump",
      "equation": "Safe*/High80*(Auto*Fill+/Auto*ManFeed*/ManOil*/ManWater)",
      "nodes": [
        {
          "id": 153,
          "kind": "input",
          "expr": "Safe",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 136,
          "inputs": []
        },
        {
          "id": 154,
          "kind": "input",
          "expr": "High80",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 137,
          "inputs": []
        },
        {
          "id": 155,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 102.0,
          "w": 115,
          "h": 60,
          "order": 138,
          "inputs": [
            {
              "name": "IN",
              "src": 154,
              "y": 28
            }
          ]
        },
        {
          "id": 156,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 139,
          "inputs": []
        },
        {
          "id": 157,
          "kind": "input",
          "expr": "Fill",
          "x": 20,
          "y": 275,
          "w": 155,
          "h": 34,
          "order": 140,
          "inputs": []
        },
        {
          "id": 158,
          "kind": "block",
          "type": "AND",
          "x": 235,
          "y": 218.0,
          "w": 115,
          "h": 68,
          "order": 141,
          "inputs": [
            {
              "name": "IN1",
              "src": 156,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 157,
              "y": 50
            }
          ]
        },
        {
          "id": 159,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 355,
          "w": 155,
          "h": 34,
          "order": 142,
          "inputs": []
        },
        {
          "id": 160,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 342.0,
          "w": 115,
          "h": 60,
          "order": 143,
          "inputs": [
            {
              "name": "IN",
              "src": 159,
              "y": 28
            }
          ]
        },
        {
          "id": 161,
          "kind": "input",
          "expr": "ManFeed",
          "x": 20,
          "y": 435,
          "w": 155,
          "h": 34,
          "order": 144,
          "inputs": []
        },
        {
          "id": 162,
          "kind": "input",
          "expr": "ManOil",
          "x": 20,
          "y": 515,
          "w": 155,
          "h": 34,
          "order": 145,
          "inputs": []
        },
        {
          "id": 163,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 502.0,
          "w": 115,
          "h": 60,
          "order": 146,
          "inputs": [
            {
              "name": "IN",
              "src": 162,
              "y": 28
            }
          ]
        },
        {
          "id": 164,
          "kind": "input",
          "expr": "ManWater",
          "x": 20,
          "y": 595,
          "w": 155,
          "h": 34,
          "order": 147,
          "inputs": []
        },
        {
          "id": 165,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 582.0,
          "w": 115,
          "h": 60,
          "order": 148,
          "inputs": [
            {
              "name": "IN",
              "src": 164,
              "y": 28
            }
          ]
        },
        {
          "id": 166,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 436.0,
          "w": 115,
          "h": 112,
          "order": 149,
          "inputs": [
            {
              "name": "IN1",
              "src": 160,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 161,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 163,
              "y": 72
            },
            {
              "name": "IN4",
              "src": 165,
              "y": 94
            }
          ]
        },
        {
          "id": 167,
          "kind": "block",
          "type": "OR",
          "x": 665,
          "y": 338.0,
          "w": 115,
          "h": 68,
          "order": 150,
          "inputs": [
            {
              "name": "IN1",
              "src": 158,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 166,
              "y": 50
            }
          ]
        },
        {
          "id": 168,
          "kind": "block",
          "type": "AND",
          "x": 880,
          "y": 140.33333333333334,
          "w": 115,
          "h": 90,
          "order": 151,
          "inputs": [
            {
              "name": "IN1",
              "src": 153,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 155,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 167,
              "y": 72
            }
          ]
        },
        {
          "id": 169,
          "kind": "output",
          "expr": "FeedPump",
          "x": 1125,
          "y": 165.33333333333334,
          "w": 170,
          "h": 40,
          "order": 152,
          "inputs": [
            {
              "name": "IN",
              "src": 168,
              "y": 20
            }
          ]
        }
      ],
      "width": 1330,
      "height": 677.0
    },
    {
      "index": 19,
      "tag": "OilValve",
      "equation": "Safe*/Low20*(Auto*Drain*OilPhase+/Auto*ManOil*/ManWater*/ManFeed)",
      "nodes": [
        {
          "id": 171,
          "kind": "input",
          "expr": "Safe",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 153,
          "inputs": []
        },
        {
          "id": 172,
          "kind": "input",
          "expr": "Low20",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 154,
          "inputs": []
        },
        {
          "id": 173,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 102.0,
          "w": 115,
          "h": 60,
          "order": 155,
          "inputs": [
            {
              "name": "IN",
              "src": 172,
              "y": 28
            }
          ]
        },
        {
          "id": 174,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 156,
          "inputs": []
        },
        {
          "id": 175,
          "kind": "input",
          "expr": "Drain",
          "x": 20,
          "y": 275,
          "w": 155,
          "h": 34,
          "order": 157,
          "inputs": []
        },
        {
          "id": 176,
          "kind": "input",
          "expr": "OilPhase",
          "x": 20,
          "y": 355,
          "w": 155,
          "h": 34,
          "order": 158,
          "inputs": []
        },
        {
          "id": 177,
          "kind": "block",
          "type": "AND",
          "x": 235,
          "y": 247.0,
          "w": 115,
          "h": 90,
          "order": 159,
          "inputs": [
            {
              "name": "IN1",
              "src": 174,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 175,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 176,
              "y": 72
            }
          ]
        },
        {
          "id": 178,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 435,
          "w": 155,
          "h": 34,
          "order": 160,
          "inputs": []
        },
        {
          "id": 179,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 422.0,
          "w": 115,
          "h": 60,
          "order": 161,
          "inputs": [
            {
              "name": "IN",
              "src": 178,
              "y": 28
            }
          ]
        },
        {
          "id": 180,
          "kind": "input",
          "expr": "ManOil",
          "x": 20,
          "y": 515,
          "w": 155,
          "h": 34,
          "order": 162,
          "inputs": []
        },
        {
          "id": 181,
          "kind": "input",
          "expr": "ManWater",
          "x": 20,
          "y": 595,
          "w": 155,
          "h": 34,
          "order": 163,
          "inputs": []
        },
        {
          "id": 182,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 582.0,
          "w": 115,
          "h": 60,
          "order": 164,
          "inputs": [
            {
              "name": "IN",
              "src": 181,
              "y": 28
            }
          ]
        },
        {
          "id": 183,
          "kind": "input",
          "expr": "ManFeed",
          "x": 20,
          "y": 675,
          "w": 155,
          "h": 34,
          "order": 165,
          "inputs": []
        },
        {
          "id": 184,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 662.0,
          "w": 115,
          "h": 60,
          "order": 166,
          "inputs": [
            {
              "name": "IN",
              "src": 183,
              "y": 28
            }
          ]
        },
        {
          "id": 185,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 516.0,
          "w": 115,
          "h": 112,
          "order": 167,
          "inputs": [
            {
              "name": "IN1",
              "src": 179,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 180,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 182,
              "y": 72
            },
            {
              "name": "IN4",
              "src": 184,
              "y": 94
            }
          ]
        },
        {
          "id": 186,
          "kind": "block",
          "type": "OR",
          "x": 665,
          "y": 398.0,
          "w": 115,
          "h": 68,
          "order": 168,
          "inputs": [
            {
              "name": "IN1",
              "src": 177,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 185,
              "y": 50
            }
          ]
        },
        {
          "id": 187,
          "kind": "block",
          "type": "AND",
          "x": 880,
          "y": 160.33333333333334,
          "w": 115,
          "h": 90,
          "order": 169,
          "inputs": [
            {
              "name": "IN1",
              "src": 171,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 173,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 186,
              "y": 72
            }
          ]
        },
        {
          "id": 188,
          "kind": "output",
          "expr": "OilValve",
          "x": 1125,
          "y": 185.33333333333334,
          "w": 170,
          "h": 40,
          "order": 170,
          "inputs": [
            {
              "name": "IN",
              "src": 187,
              "y": 20
            }
          ]
        }
      ],
      "width": 1330,
      "height": 757.0
    },
    {
      "index": 20,
      "tag": "WaterValve",
      "equation": "Safe*/Low20*(Auto*Drain*/OilPhase+/Auto*ManWater*/ManOil*/ManFeed)",
      "nodes": [
        {
          "id": 190,
          "kind": "input",
          "expr": "Safe",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 171,
          "inputs": []
        },
        {
          "id": 191,
          "kind": "input",
          "expr": "Low20",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 172,
          "inputs": []
        },
        {
          "id": 192,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 102.0,
          "w": 115,
          "h": 60,
          "order": 173,
          "inputs": [
            {
              "name": "IN",
              "src": 191,
              "y": 28
            }
          ]
        },
        {
          "id": 193,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 174,
          "inputs": []
        },
        {
          "id": 194,
          "kind": "input",
          "expr": "Drain",
          "x": 20,
          "y": 275,
          "w": 155,
          "h": 34,
          "order": 175,
          "inputs": []
        },
        {
          "id": 195,
          "kind": "input",
          "expr": "OilPhase",
          "x": 20,
          "y": 355,
          "w": 155,
          "h": 34,
          "order": 176,
          "inputs": []
        },
        {
          "id": 196,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 342.0,
          "w": 115,
          "h": 60,
          "order": 177,
          "inputs": [
            {
              "name": "IN",
              "src": 195,
              "y": 28
            }
          ]
        },
        {
          "id": 197,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 247.0,
          "w": 115,
          "h": 90,
          "order": 178,
          "inputs": [
            {
              "name": "IN1",
              "src": 193,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 194,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 196,
              "y": 72
            }
          ]
        },
        {
          "id": 198,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 435,
          "w": 155,
          "h": 34,
          "order": 179,
          "inputs": []
        },
        {
          "id": 199,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 422.0,
          "w": 115,
          "h": 60,
          "order": 180,
          "inputs": [
            {
              "name": "IN",
              "src": 198,
              "y": 28
            }
          ]
        },
        {
          "id": 200,
          "kind": "input",
          "expr": "ManWater",
          "x": 20,
          "y": 515,
          "w": 155,
          "h": 34,
          "order": 181,
          "inputs": []
        },
        {
          "id": 201,
          "kind": "input",
          "expr": "ManOil",
          "x": 20,
          "y": 595,
          "w": 155,
          "h": 34,
          "order": 182,
          "inputs": []
        },
        {
          "id": 202,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 582.0,
          "w": 115,
          "h": 60,
          "order": 183,
          "inputs": [
            {
              "name": "IN",
              "src": 201,
              "y": 28
            }
          ]
        },
        {
          "id": 203,
          "kind": "input",
          "expr": "ManFeed",
          "x": 20,
          "y": 675,
          "w": 155,
          "h": 34,
          "order": 184,
          "inputs": []
        },
        {
          "id": 204,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 662.0,
          "w": 115,
          "h": 60,
          "order": 185,
          "inputs": [
            {
              "name": "IN",
              "src": 203,
              "y": 28
            }
          ]
        },
        {
          "id": 205,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 516.0,
          "w": 115,
          "h": 112,
          "order": 186,
          "inputs": [
            {
              "name": "IN1",
              "src": 199,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 200,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 202,
              "y": 72
            },
            {
              "name": "IN4",
              "src": 204,
              "y": 94
            }
          ]
        },
        {
          "id": 206,
          "kind": "block",
          "type": "OR",
          "x": 665,
          "y": 398.0,
          "w": 115,
          "h": 68,
          "order": 187,
          "inputs": [
            {
              "name": "IN1",
              "src": 197,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 205,
              "y": 50
            }
          ]
        },
        {
          "id": 207,
          "kind": "block",
          "type": "AND",
          "x": 880,
          "y": 160.33333333333334,
          "w": 115,
          "h": 90,
          "order": 188,
          "inputs": [
            {
              "name": "IN1",
              "src": 190,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 192,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 206,
              "y": 72
            }
          ]
        },
        {
          "id": 208,
          "kind": "output",
          "expr": "WaterValve",
          "x": 1125,
          "y": 185.33333333333334,
          "w": 170,
          "h": 40,
          "order": 189,
          "inputs": [
            {
              "name": "IN",
              "src": 207,
              "y": 20
            }
          ]
        }
      ],
      "width": 1330,
      "height": 757.0
    },
    {
      "index": 21,
      "tag": "Heater",
      "equation": "Safe*Auto*Settle*/Low20",
      "nodes": [
        {
          "id": 210,
          "kind": "input",
          "expr": "Safe",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 190,
          "inputs": []
        },
        {
          "id": 211,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 191,
          "inputs": []
        },
        {
          "id": 212,
          "kind": "input",
          "expr": "Settle",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 192,
          "inputs": []
        },
        {
          "id": 213,
          "kind": "input",
          "expr": "Low20",
          "x": 20,
          "y": 275,
          "w": 155,
          "h": 34,
          "order": 193,
          "inputs": []
        },
        {
          "id": 214,
          "kind": "block",
          "type": "NOT",
          "x": 235,
          "y": 262.0,
          "w": 115,
          "h": 60,
          "order": 194,
          "inputs": [
            {
              "name": "IN",
              "src": 213,
              "y": 28
            }
          ]
        },
        {
          "id": 215,
          "kind": "block",
          "type": "AND",
          "x": 450,
          "y": 116.0,
          "w": 115,
          "h": 112,
          "order": 195,
          "inputs": [
            {
              "name": "IN1",
              "src": 210,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 211,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 212,
              "y": 72
            },
            {
              "name": "IN4",
              "src": 214,
              "y": 94
            }
          ]
        },
        {
          "id": 216,
          "kind": "output",
          "expr": "Heater",
          "x": 695,
          "y": 152.0,
          "w": 170,
          "h": 40,
          "order": 196,
          "inputs": [
            {
              "name": "IN",
              "src": 215,
              "y": 20
            }
          ]
        }
      ],
      "width": 900,
      "height": 357.0
    },
    {
      "index": 22,
      "tag": "AlarmLamp",
      "equation": "Alarm",
      "nodes": [
        {
          "id": 218,
          "kind": "input",
          "expr": "Alarm",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 197,
          "inputs": []
        },
        {
          "id": 219,
          "kind": "output",
          "expr": "AlarmLamp",
          "x": 265,
          "y": 32.0,
          "w": 170,
          "h": 40,
          "order": 198,
          "inputs": [
            {
              "name": "IN",
              "src": 218,
              "y": 20
            }
          ]
        }
      ],
      "width": 470,
      "height": 107.0
    },
    {
      "index": 23,
      "tag": "PumpCmdLamp",
      "equation": "FeedPump",
      "nodes": [
        {
          "id": 221,
          "kind": "input",
          "expr": "FeedPump",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 199,
          "inputs": []
        },
        {
          "id": 222,
          "kind": "output",
          "expr": "PumpCmdLamp",
          "x": 265,
          "y": 32.0,
          "w": 170,
          "h": 40,
          "order": 200,
          "inputs": [
            {
              "name": "IN",
              "src": 221,
              "y": 20
            }
          ]
        }
      ],
      "width": 470,
      "height": 107.0
    },
    {
      "index": 24,
      "tag": "LowWarning",
      "equation": "LowLo10",
      "nodes": [
        {
          "id": 224,
          "kind": "input",
          "expr": "LowLo10",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 201,
          "inputs": []
        },
        {
          "id": 225,
          "kind": "output",
          "expr": "LowWarning",
          "x": 265,
          "y": 32.0,
          "w": 170,
          "h": 40,
          "order": 202,
          "inputs": [
            {
              "name": "IN",
              "src": 224,
              "y": 20
            }
          ]
        }
      ],
      "width": 470,
      "height": 107.0
    },
    {
      "index": 25,
      "tag": "BatchDone",
      "equation": "D0*Low20*Run*Auto",
      "nodes": [
        {
          "id": 227,
          "kind": "input",
          "expr": "D0",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 203,
          "inputs": []
        },
        {
          "id": 228,
          "kind": "input",
          "expr": "Low20",
          "x": 20,
          "y": 115,
          "w": 155,
          "h": 34,
          "order": 204,
          "inputs": []
        },
        {
          "id": 229,
          "kind": "input",
          "expr": "Run",
          "x": 20,
          "y": 195,
          "w": 155,
          "h": 34,
          "order": 205,
          "inputs": []
        },
        {
          "id": 230,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 275,
          "w": 155,
          "h": 34,
          "order": 206,
          "inputs": []
        },
        {
          "id": 231,
          "kind": "block",
          "type": "AND",
          "x": 235,
          "y": 116.0,
          "w": 115,
          "h": 112,
          "order": 207,
          "inputs": [
            {
              "name": "IN1",
              "src": 227,
              "y": 28
            },
            {
              "name": "IN2",
              "src": 228,
              "y": 50
            },
            {
              "name": "IN3",
              "src": 229,
              "y": 72
            },
            {
              "name": "IN4",
              "src": 230,
              "y": 94
            }
          ]
        },
        {
          "id": 232,
          "kind": "output",
          "expr": "BatchDone",
          "x": 480,
          "y": 152.0,
          "w": 170,
          "h": 40,
          "order": 208,
          "inputs": [
            {
              "name": "IN",
              "src": 231,
              "y": 20
            }
          ]
        }
      ],
      "width": 685,
      "height": 344
    },
    {
      "index": 26,
      "tag": "PrevStart",
      "equation": "Start",
      "nodes": [
        {
          "id": 234,
          "kind": "input",
          "expr": "Start",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 209,
          "inputs": []
        },
        {
          "id": 235,
          "kind": "output",
          "expr": "PrevStart",
          "x": 265,
          "y": 32.0,
          "w": 170,
          "h": 40,
          "order": 210,
          "inputs": [
            {
              "name": "IN",
              "src": 234,
              "y": 20
            }
          ]
        }
      ],
      "width": 470,
      "height": 107.0
    },
    {
      "index": 27,
      "tag": "PrevReset",
      "equation": "Reset",
      "nodes": [
        {
          "id": 237,
          "kind": "input",
          "expr": "Reset",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 211,
          "inputs": []
        },
        {
          "id": 238,
          "kind": "output",
          "expr": "PrevReset",
          "x": 265,
          "y": 32.0,
          "w": 170,
          "h": 40,
          "order": 212,
          "inputs": [
            {
              "name": "IN",
              "src": 237,
              "y": 20
            }
          ]
        }
      ],
      "width": 470,
      "height": 107.0
    },
    {
      "index": 28,
      "tag": "PrevAuto",
      "equation": "Auto",
      "nodes": [
        {
          "id": 240,
          "kind": "input",
          "expr": "Auto",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 213,
          "inputs": []
        },
        {
          "id": 241,
          "kind": "output",
          "expr": "PrevAuto",
          "x": 265,
          "y": 32.0,
          "w": 170,
          "h": 40,
          "order": 214,
          "inputs": [
            {
              "name": "IN",
              "src": 240,
              "y": 20
            }
          ]
        }
      ],
      "width": 470,
      "height": 107.0
    },
    {
      "index": 29,
      "tag": "FirstScan",
      "equation": "FALSE",
      "nodes": [
        {
          "id": 243,
          "kind": "input",
          "expr": "FALSE",
          "x": 20,
          "y": 35,
          "w": 155,
          "h": 34,
          "order": 215,
          "inputs": []
        },
        {
          "id": 244,
          "kind": "output",
          "expr": "FirstScan",
          "x": 265,
          "y": 32.0,
          "w": 170,
          "h": 40,
          "order": 216,
          "inputs": [
            {
              "name": "IN",
              "src": 243,
              "y": 20
            }
          ]
        }
      ],
      "width": 470,
      "height": 107.0
    }
  ],
  "initial": {
    "Auto": true,
    "TempOK": true,
    "EStopOK": true,
    "Low20": true,
    "FirstScan": true
  },
  "scanMs": 100
};
/* Executes the generated FBD nodes in their explicit PLC scan order.
   Native project: Oil_Water_Separator_PLCopen.xml. Browser simulation only. */
class FBDController {
 constructor(graph){this.graph=graph;this.e={};for(const n of [...graph.spec.inputs,...graph.spec.outputs,...graph.spec.relays,...graph.spec.timers.map(t=>t[0])])this.e[n]=false;Object.assign(this.e,graph.initial);this.timers={};this.values={};this.time=0;this.scans=0;}
 read(expr){if(expr==='TRUE')return true;if(expr==='FALSE')return false;if(/^T#/.test(expr))return Number(expr.match(/[\d.]+/)[0]);return !!this.e[expr];}
 scan(dt=.1){for(const net of this.graph.networks)for(const n of net.nodes){let value;if(n.kind==='input')value=this.read(n.expr);else if(n.kind==='output'){value=!!this.values[n.inputs[0].src];this.e[n.expr]=value;}else{const a=n.inputs.map(p=>this.values[p.src]);switch(n.type){case'AND':value=a.every(Boolean);break;case'OR':value=a.some(Boolean);break;case'NOT':value=!a[0];break;case'TON':{const t=this.timers[n.instance]||(this.timers[n.instance]={elapsed:0,preset:a[1],q:false});t.elapsed=a[0]?Math.min(a[1],t.elapsed+dt):0;t.q=t.elapsed+1e-8>=a[1];value=t.q;break;}default:throw Error('Unknown FBD block '+n.type);}}this.values[n.id]=value;}this.time+=dt;this.scans++;return this.e;}
}
if(typeof module!=='undefined')module.exports={FBDController};
