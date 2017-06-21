# jupyter-nb-output-reconnect

- This Chrome Extension allows you to see the output of a running Jupyter Notebook after you disconnected and reconnected to it.
- It will append an output cell to the bottom of your notebook, where the output will show up.
- As it is now, the output of that cell is replaced with every `print` command on the running script, which is nice for progress bars, for instance, but not so nice if you want to print several lines, as only the last one will persist. However, the output is also logged on the Developer Console, so you can also check it there
- The browser extension icon simply toggles the extension on a per tab basis.
- This is experimental, so it might have unexpected behaviour
