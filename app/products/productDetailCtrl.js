/**
 * Created by Prashant on 9/9/2015.
 */
(function () {
    "use strict";
    angular.module("productManagement")
        .controller("ProductDetailCtrl",["product","productService",ProductDetailCtrl]);

    function ProductDetailCtrl(product,productService) {

        var vm = this;
        var product =product;
       /* {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2010",
            "description": "15 gallon capacity rolling garden",
            "cost": 20.00,
            "price": 32.95,
            "category": "garden",
            "tags": ["barrow", "cart", "wheelbarrow"],
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        };
*/
        vm.product = product;
        vm.title = "Product Detail: " + vm.product.productName;

        vm.marginPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost);
        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();

        }


    }


}());