import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'imageformater'
})
export class ImageFormaterPipe implements PipeTransform {

    transform(image: string, path: string = '', replace: boolean) {
        if (path === 'default') {
            path = 'assets';
        }

        if (image.length === 0 && replace) {
            image = 'noCover.jpg'
        }

        return '/' + path + '/' + image;
    }
}