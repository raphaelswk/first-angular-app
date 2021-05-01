import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filesize'
})
export class FileSizePipe implements PipeTransform{
    transform(size: number) {
        let measuredSize = (size / (1024 * 1024));
        let extension = ' MB';

        if (measuredSize > 1024) {
            measuredSize = (measuredSize / 1024);
            extension = ' GB';
        }

        return measuredSize.toFixed(2) + extension;
    }
}