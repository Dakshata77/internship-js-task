SECTION A

1.  var → function scoped, can be redeclared & reassigned
    let → block scoped, cannot be redeclared, can be reassigned
    const → block scoped, cannot be redeclared or reassigned

2.  var allows redeclaration because it doesn’t have block scope.

3.  var and let allow reinitialization.

4.  const does not allow redeclaration or reinitialization.

5.  const is used for fixed values to prevent accidental changes.

6.  Redeclaring let causes SyntaxError: Identifier has already been declared.

7.  Reassigning const causes TypeError: Assignment to constant variable.

8.  let and const are preferred because they are block scoped and safer.

9.  No, const must be initialized at declaration time.

10. var should be avoided due to scope issues and hoisting problems.


SECTION B

11. Output → 30

12. Output → 15

13. Error → SyntaxError (cannot redeclare let variable)

14. Error → TypeError (cannot reassign const)

15. var a = 10;
    var a = 20;
    console.log(a); // 20

16. let b = 5;
    b = 15;
    console.log(b); // 15

17. const c = 50;
    c = 100; // Error


Reason: const value cannot be changed.

18. let x = 10;
    x = 20;

19. const y = 30;

20. var a = 1;
    let b = 2;
    const c = 3;
