//Component

// class myComponent {
//   constructor( myCSSService ) {
//       this.styles = {
//           background: 'black',
//           color: 'white'
//       };
//       this.myCSSService = myCSSService;
//   }
// }

// myComponent.$inject = [ 'myCSSService' ];

// angular.module( 'myModule', [] )
//   .component( 'myComponent', {
//       controller: myComponent,
//       bindings: {},
//       template: `
//         <div ng-style="$ctrl.styles">
//           My Component with local CSS
//         </div>
//         <div ng-style="$ctrl.myCSSService.styles">
//           My Component with Injected CSS
//         </div>
//       `,
//   } );

// //Style Service

// class myCSSService{
// constructor( ) {
//     this.styles = {
//       background: 'green',
//       color: 'black'
//     };
// }
// }

// angular.module( 'myCSSModule', [] )
//   .service( 'myCSSService', myCSSService );
