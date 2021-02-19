#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

SetTitleMatchMode, RegEx


#Include autocorrect.ahk
#Include order_detail_win_s.ahk
#Include CheckPrice.ahk
#Include hotkeyMicrosoftOffice.ahk  

#q::
ToolTip, Reloading main.ahk
Sleep, 500
Reload
Return
