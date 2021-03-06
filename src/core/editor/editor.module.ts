// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NgModule } from '@angular/core';
import { CoreEditorComponentsModule } from './components/components.module';
import { CoreEditorOfflineProvider } from './providers/editor-offline';

// List of providers (without handlers).
export const CORE_GRADES_PROVIDERS: any[] = [
    CoreEditorOfflineProvider,
];

@NgModule({
    declarations: [
    ],
    imports: [
        CoreEditorComponentsModule,
    ],
    providers: [
        CoreEditorOfflineProvider,
    ],
})
export class CoreEditorModule {
    constructor(editorOffline: CoreEditorOfflineProvider) {
        // Inject the helper even if it isn't used here it's instantiated.
    }
}
