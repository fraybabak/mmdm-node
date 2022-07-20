import { AccountConfiguration, ActivationLockBypassCode, AvailableOSUpdates, CertificateList, DeviceConfigured, DeviceInformation, DeviceLocation, DeviceLock, disableLostMode, DisableRemoteDesktop, EnableLostMode, EnableRemoteDesktop, EraseDevice, InstallApplication, InstalledApplicationList, InstallEnterpriseApplication, InstallProvisioningProfile, install_profile, OSUpdateStatus, PlayLostModeSound, ProfileList, ProvisioningProfileList, RefreshCellularPlans, RemoveProfile, RemoveProvisioningProfile, RestartDevice, ScheduleOSUpdate, ScheduleOSUpdateScan, SecurityInfo, SetFirmwarePassword, SetRecoveryLock, Settings, VerifyFirmwarePassword, VerifyRecoveryLock } from './command_types';
import axios from "axios";
class MobileDeviceManagementApple {
    axios: any;
    constructor(server: string, version: string, token: string) {
        this.axios = axios.create({
            baseURL: server + `v${version}/`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization:
                    `Basic ${token}`,
            },
        });
    }
    // bWljcm9tZG06YXNnaGFyU2VjMnIzdEphMXZhM2RTaW5hU2FlZWQxMjM0NQ==
    installed_application_list(data: InstalledApplicationList) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "InstalledApplicationList",
            };
            return this.axios.post(`commands`, payload);
        } catch (error) {

            throw error
        }
    }
    getLocation(data: DeviceLocation) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "DeviceLocation",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    getDeviceInfo(data: DeviceInformation) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "DeviceInformation",
                queries: data.queries,
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    enableLostMode(data: EnableLostMode) {
        try {
            let payload = {
                udid: data.udid,
                Footnote: data.foot_note,
                Message: data.message,
                PhoneNumber: data.phone_number,
                request_type: "EnableLostMode",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    disableLostMode(data: disableLostMode) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "DisableLostMode",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    playLostModeSoundLostMode(data: PlayLostModeSound) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "PlayLostModeSound",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    account_configuration_populate_user(data: AccountConfiguration) {
        /**
         * populate and lock the account info for the setup assistant.
         */
        try {
            let payload = {
                udid: data.udid,
                username: data.username,
                fullname: data.fullname,
                request_type: "AccountConfiguration",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    activation_lock_bypass_code(data: ActivationLockBypassCode) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "ActivationLockBypassCode",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    available_os_updates(data: AvailableOSUpdates) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "AvailableOSUpdates",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    certificate_list(data: CertificateList) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "CertificateList",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    device_configured(data: DeviceConfigured) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "DeviceConfigured",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    device_lock(data: DeviceLock) {
        try {
            let payload = {
                udid: data.udid,
                pin: data.pin,
                request_type: "DeviceLock",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    erase_device(data: EraseDevice) {
        try {
            let payload = {
                udid: data.udid,
                pin: data.pin,
                request_type: "EraseDevice",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    disable_remote_desktop(data: DisableRemoteDesktop) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "DisableRemoteDesktop",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    enable_remote_desktop(data: EnableRemoteDesktop) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "EnableRemoteDesktop",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    install_application(data: InstallApplication) {
        try {
            let payload = {
                udid: data.udid,
                manifest_url: data.manifest_url,
                request_type: "InstallApplication",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    install_enterprise_application(data: InstallEnterpriseApplication) {
        try {
            let payload = {
                udid: data.udid,
                manifest_url: data.manifest_url,
                request_type: "InstallEnterpriseApplication",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    install_appstore_application(data: InstallApplication) {
        try {
            let payload = {
                udid: data.udid,
                identifier: data.identifier,
                request_type: "InstallApplication",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    install_profile(data: install_profile) {
        //   TODO: prepare the payload
        try {
            let payload = {
                udid: data.udid,
                payload: data.payload,
                request_type: "InstallProfile",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    install_provisioning_profile(data: InstallProvisioningProfile) {
        //   TODO: prepare the payload
        try {
            let payload = {
                udid: data.udid,
                payload: data.payload,
                request_type: "InstallProvisioningProfile",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    os_update_status(data: OSUpdateStatus) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "OSUpdateStatus",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    profile_list(data: ProfileList) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "ProfileList",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    provisioning_profile_list(data: ProvisioningProfileList) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "ProvisioningProfileList",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    refresh_cellular_plans(data: RefreshCellularPlans) {
        try {
            let payload = {
                udid: data.udid,
                esim_server_url: data.esim_server_url,
                request_type: "RefreshCellularPlans",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    remove_profile(data: RemoveProfile) {
        try {
            let payload = {
                udid: data.udid,
                identifier: data.identifier,
                request_type: "RemoveProfile",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    remove_provisioning_profile(data: RemoveProvisioningProfile) {
        try {
            let payload = {
                udid: data.udid,
                uuid: data.uuid,
                request_type: "RemoveProvisioningProfile",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    restart_device(data: RestartDevice) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "RestartDevice",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    schedule_os_update(data: ScheduleOSUpdate) {
        try {
            let payload = {
                udid: data.udid,
                product_key: data.product_key,
                install_action: data.install_action,
                request_type: "ScheduleOSUpdate",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    schedule_os_update_scan(data: ScheduleOSUpdateScan) {
        try {
            let payload = {
                udid: data.udid,
                force: data.force,
                request_type: "ScheduleOSUpdateScan",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    security_info(data: SecurityInfo) {
        try {
            let payload = {
                udid: data.udid,
                request_type: "SecurityInfo",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    set_firmware_password(data: SetFirmwarePassword) {
        try {
            let payload = {
                udid: data.udid,
                current_password: data.current_password,
                new_password: data.new_password,
                request_requires_network_tether: data.request_requires_network_tether,
                allow_oroms: data.allow_oroms,
                request_type: "SetFirmwarePassword",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    set_recovery_lock(data: SetRecoveryLock) {
        try {
            let payload = {
                udid: data.udid,
                current_password: data.current_password,
                new_password: data.new_password,
                request_requires_network_tether: data.request_requires_network_tether,
                allow_oroms: data.allow_oroms,
                request_type: "SetRecoveryLock",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    verify_firmware_password(data: VerifyFirmwarePassword) {
        try {
            let payload = {
                udid: data.udid,
                password: data.password,
                request_requires_network_tether: data.request_requires_network_tether,
                allow_oroms: data.allow_oroms,
                request_type: "VerifyFirmwarePassword",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    verify_recovery_lock(data: VerifyRecoveryLock) {
        try {
            let payload = {
                udid: data.udid,
                password: data.password,
                request_requires_network_tether: data.request_requires_network_tether,
                allow_oroms: data.allow_oroms,
                request_type: "VerifyRecoveryLock",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
    settings_application_configuration(data: Settings) {
        /* <?xml version="1.0" encoding="UTF-8"?>
                /* <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
                /* <plist version="1.0">
                /*   <dict>
                /*     <key>baz</key>
                /*     <string>qux</string>
                /*     <key>count</key>
                /*     <integer>1</integer>
                /*     <key>foo</key>
                /*     <string>bar</string>
                /*   </dict>
                /* </plist>
            */
        //   TODO: prepare the payload
        try {
            let payload = {
                udid: data.udid,
                identifier: data.identifier,
                payload: data.payload,
                request_type: "Settings",
            };
            return this.axios.post(`commands`, payload);

        } catch (error) {
            throw error
        }
    }
}

export default MobileDeviceManagementApple;