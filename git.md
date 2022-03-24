# git

0. Let's say the repository is accessed using ssh keys. The client was given a public key, which he had added to the access settings of the remote repository. 
1. `git init`
Initialize local empty git repository.
2. Add the results of the work to the local repository.  Commands are `git add` and `git commit`.
3. `git remote add origin git@example.com:example/test.git`
Add remote repository `git@example.com:example/test.git` as origin.
4. Push changes to the remote repository `git push origin master`
