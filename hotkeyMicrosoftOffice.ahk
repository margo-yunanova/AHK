#IfWinActive - Message \(HTML\) $ ahk_class rctrl_renwnd32 ahk_exe OUTLOOK.EXE
#z::
Send, {alt}HAFB ; вложить файл если письмо развернуто

#IfWinActive - Outlook$ ahk_class rctrl_renwnd32 ahk_exe OUTLOOK.EXE
#z::
Send, {alt}E2AFB ; вложить файл если письмо в окне outlook



#IfWinActive ; чтобы отключить контекстнозависимые горячие клавиши

