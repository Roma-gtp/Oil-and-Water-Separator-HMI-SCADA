PROGRAM Separator
VAR_INPUT
    Start : BOOL;
    Stop : BOOL;
    Low20 : BOOL := TRUE;
    High80 : BOOL;
    HighHi90 : BOOL;
    Auto : BOOL := TRUE;
    LowLo10 : BOOL;
    Reset : BOOL;
    OilPhase : BOOL;
    TempOK : BOOL := TRUE;
    EStopOK : BOOL := TRUE;
    ManFeed : BOOL;
    ManOil : BOOL;
    ManWater : BOOL;
END_VAR
VAR_OUTPUT
    FeedPump : BOOL;
    AlarmLamp : BOOL;
    PumpCmdLamp : BOOL;
    LowWarning : BOOL;
    OilValve : BOOL;
    WaterValve : BOOL;
    Heater : BOOL;
    BatchDone : BOOL;
END_VAR
VAR
    F0 : BOOL;
    S0 : BOOL;
    D0 : BOOL;
    StartEdge : BOOL;
    ResetEdge : BOOL;
    ModeStable : BOOL;
    BadLevel : BOOL;
    Trip : BOOL;
    Alarm : BOOL;
    Run : BOOL;
    Fill : BOOL;
    Settle : BOOL;
    Drain : BOOL;
    Safe : BOOL;
    PrevStart : BOOL;
    PrevReset : BOOL;
    PrevAuto : BOOL;
    Settle30 : BOOL;
    Fill120 : BOOL;
    Drain120 : BOOL;
    FirstScan : BOOL := TRUE;
END_VAR
VAR
    SettleTimer : TON;
    FillTimer : TON;
    DrainTimer : TON;
END_VAR

F0 := Fill;
S0 := Settle;
D0 := Drain;
SettleTimer(IN := S0, PT := T#30s);
Settle30 := SettleTimer.Q;
FillTimer(IN := F0, PT := T#120s);
Fill120 := FillTimer.Q;
DrainTimer(IN := D0, PT := T#120s);
Drain120 := DrainTimer.Q;
StartEdge := (Start AND NOT (PrevStart) AND NOT (FirstScan));
ResetEdge := (Reset AND NOT (PrevReset) AND NOT (FirstScan));
ModeStable := (((Auto AND PrevAuto) OR (NOT (Auto) AND NOT (PrevAuto))) AND NOT (FirstScan));
BadLevel := ((HighHi90 AND NOT (High80)) OR (High80 AND Low20) OR (LowLo10 AND NOT (Low20)));
Trip := (HighHi90 OR NOT (EStopOK) OR NOT (TempOK) OR BadLevel OR Fill120 OR Drain120);
Alarm := (Trip OR (Alarm AND NOT (ResetEdge)));
Run := ((Run OR StartEdge) AND ModeStable AND NOT (Stop) AND NOT (Alarm) AND EStopOK AND NOT (FirstScan));
Fill := (Run AND Auto AND NOT (High80) AND (F0 OR (Low20 AND NOT (S0) AND NOT (D0))));
Settle := (Run AND Auto AND NOT (Settle30) AND (S0 OR (F0 AND High80)));
Drain := (Run AND Auto AND NOT (Low20) AND (D0 OR (S0 AND Settle30)));
Safe := (Run AND NOT (Stop) AND NOT (Alarm) AND EStopOK AND TempOK AND NOT (HighHi90));
FeedPump := (Safe AND NOT (High80) AND ((Auto AND Fill) OR (NOT (Auto) AND ManFeed AND NOT (ManOil) AND NOT (ManWater))));
OilValve := (Safe AND NOT (Low20) AND ((Auto AND Drain AND OilPhase) OR (NOT (Auto) AND ManOil AND NOT (ManWater) AND NOT (ManFeed))));
WaterValve := (Safe AND NOT (Low20) AND ((Auto AND Drain AND NOT (OilPhase)) OR (NOT (Auto) AND ManWater AND NOT (ManOil) AND NOT (ManFeed))));
Heater := (Safe AND Auto AND Settle AND NOT (Low20));
AlarmLamp := Alarm;
PumpCmdLamp := FeedPump;
LowWarning := LowLo10;
BatchDone := (D0 AND Low20 AND Run AND Auto);
PrevStart := Start;
PrevReset := Reset;
PrevAuto := Auto;
FirstScan := FALSE;
END_PROGRAM
