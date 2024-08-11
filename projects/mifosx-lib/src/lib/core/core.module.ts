/** Angular Imports */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

/** Translation Imports */
import { TranslateModule } from '@ngx-translate/core';

/** Custom Services */
import { AuthenticationService } from './authentication/authentication.service';
import { HttpService } from './http/http.service';
import { HttpCacheService } from './http/http-cache.service';
import { ProgressBarService } from './progress-bar/progress-bar.service';

/** Custom Guards */
import { AuthenticationGuard } from './authentication/authentication.guard';

/** Custom Interceptors */
import { ProgressInterceptor } from './progress-bar/progress.interceptor';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { CacheInterceptor } from './http/cache.interceptor';
import { AuthenticationInterceptor } from './authentication/authentication.interceptor';

/** Custom Strategies */
import { RouteReusableStrategy } from './route/route-reusable-strategy';

/** Custom Components */
import { ShellComponent } from './shell/shell.component';
import { SidenavComponent } from './shell/sidenav/sidenav.component';
import { ToolbarComponent } from './shell/toolbar/toolbar.component';
import { FooterComponent } from './shell/footer/footer.component';
import { BreadcrumbComponent } from './shell/breadcrumb/breadcrumb.component';
import { ContentComponent } from './shell/content/content.component';
import { MaterialModule } from '@mifosx-lib/material.module';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './shell/language-selector/language-selector.component';
import { ThemeToggleComponent } from './shell/theme-toggle/theme-toggle.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchToolComponent } from './shell/search-tool/search-tool.component';
import { ReactiveFormsModule } from '@angular/forms';


/**
 * Core Module
 *
 * Main app shell components and singleton services should be here.
 */
@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule,
    RouterModule,
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  declarations: [
    ShellComponent,
    SidenavComponent,
    ToolbarComponent,
    BreadcrumbComponent,
    ContentComponent,
    FooterComponent,
    LanguageSelectorComponent,
    ThemeToggleComponent,
    SearchToolComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    FooterComponent,
    LanguageSelectorComponent,
    ThemeToggleComponent,
    SearchToolComponent
  ],

  providers: [
    {
      provide: HttpClient,
      useClass: HttpService
    },
    AuthenticationService,
    AuthenticationGuard,
    AuthenticationInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    HttpCacheService,
    ApiPrefixInterceptor,
    ErrorHandlerInterceptor,
    CacheInterceptor,
    ProgressBarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressInterceptor,
      multi: true
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}
